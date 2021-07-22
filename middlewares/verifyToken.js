const jwt = require("jsonwebtoken");
const { JWT_TOKEN } = process.env;

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, JWT_TOKEN);
    req.user = decoded.data;
    return next();
  } catch (err) {
    return res.status(403).json({ status: "error", message: err.message });
  }
};
