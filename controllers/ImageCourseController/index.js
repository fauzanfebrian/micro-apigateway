const { apiAdapter, errorHandler } = require("../../api");
const { URL_SERVICE_COURSE, HOST } = process.env;
const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = {
  create: async (req, res) => {
    try {
      const imageCourse = await api.post("/api/image-courses", req.body);
      return res.json(imageCourse.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const imageCourse = await api.delete(`/api/image-courses/${id}`);
      return res.json(imageCourse.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
