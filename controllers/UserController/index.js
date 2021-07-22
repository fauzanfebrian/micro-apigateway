const { apiAdapter, errorHandler } = require("../../api");
const {
  URL_SERVICE_USER,
  JWT_TOKEN,
  JWT_TOKEN_EXPIRED,
  JWT_REFRESH_TOKEN,
  JWT_REFRESH_TOKEN_EXPIRED,
} = process.env;
const jwt = require("jsonwebtoken");
const api = apiAdapter(URL_SERVICE_USER);

module.exports = {
  register: async (req, res) => {
    try {
      const user = await api.post("/users/register", req.body);
      return res.json(user.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  login: async (req, res) => {
    try {
      console.dir(req.ip);
      console.dir(req.ips);
      const user = await api.post("/users/login", req.body);
      const data = user.data.data;

      const token = jwt.sign({ data }, JWT_TOKEN, {
        expiresIn: JWT_TOKEN_EXPIRED,
      });
      const refreshToken = jwt.sign({ data }, JWT_REFRESH_TOKEN, {
        expiresIn: JWT_REFRESH_TOKEN_EXPIRED,
      });

      await api.post("/refresh_tokens", {
        user_id: data.id,
        refresh_token: refreshToken,
      });

      return res.json({
        status: "success",
        data: {
          token,
          refresh_token: refreshToken,
        },
      });
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.user;
      const user = await api.put(`/users/${id}`, req.body);
      return res.json(user.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  getUser: async (req, res) => {
    try {
      const { id } = req.user;
      const user = await api.get(`/users/${id}`, req.body);
      return res.json(user.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  // getUsers: async (req, res) =>{
  //   try {
  //     const userIds = req.query.user_ids || [];
  //     const user = await api.get('/users',)
  //   } catch (err) {
  //     return errorHandler(req, res, err);
  //   }
  // }
  logout: async (req, res) => {
    try {
      const { id } = req.user;
      const user = await api.post(`/users/logout`, { user_id: id });
      return res.json(user.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
