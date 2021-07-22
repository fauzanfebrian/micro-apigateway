const { apiAdapter, errorHandler } = require("../../api");
const { URL_SERVICE_COURSE, HOST } = process.env;
const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = {
  create: async (req, res) => {
    try {
      req.body.user_id = req.user.id;
      const myCourse = await api.post("/api/my-courses", req.body);
      return res.json(myCourse.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  getAll: async (req, res) => {
    try {
      const { id } = req.user;
      const myCourse = await api.get(`/api/my-courses/`, {
        params: { user_id: id },
      });
      return res.json(myCourse.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
