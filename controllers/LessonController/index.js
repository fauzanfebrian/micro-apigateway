const { apiAdapter, errorHandler } = require("../../api");
const { URL_SERVICE_COURSE, HOST } = process.env;
const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = {
  create: async (req, res) => {
    try {
      const lesson = await api.post("/api/lessons", req.body);
      return res.json(lesson.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const lesson = await api.put(`/api/lessons/${id}`, req.body);
      return res.json(lesson.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  getAll: async (req, res) => {
    try {
      const lessons = await api.get("/api/lessons", {
        params: { ...req.query },
      });
      return res.json(lessons.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const lesson = await api.get(`/api/lessons/${id}`);
      return res.json(lesson.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const lesson = await api.delete(`/api/lessons/${id}`);
      return res.json(lesson.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
