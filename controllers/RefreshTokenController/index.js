const { apiAdapter, errorHandler } = require("../../api");
const {
  URL_SERVICE_USER,
  JWT_TOKEN,
  JWT_TOKEN_EXPIRED,
  JWT_REFRESH_TOKEN,
} = process.env;
const jwt = require("jsonwebtoken");
const api = apiAdapter(URL_SERVICE_USER);
module.exports = {
  refreshToken: async (req, res) => {
    try {
      const { refresh_token: refreshToken, email } = req.body;
      if (!refreshToken || !email) {
        return res.status(400).json({
          status: "error",
          message: "invalid token",
        });
      }

      await api.get("/refresh_tokens", {
        params: { refresh_token: refreshToken },
      });

      return jwt.verify(refreshToken, JWT_REFRESH_TOKEN, (err, decoded) => {
        if (err) {
          return res.status(403).json({
            status: "error",
            message: err.message,
          });
        }
        if (email !== decoded.data.email) {
          return res.status(400).json({
            status: "error",
            message: "email is not valid",
          });
        }
        const token = jwt.sign({ data: decoded.data }, JWT_TOKEN, {
          expiresIn: JWT_TOKEN_EXPIRED,
        });
        return res.json({
          status: "succes",
          data: { token },
        });
      });
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
