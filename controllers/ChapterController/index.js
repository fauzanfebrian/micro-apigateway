const { apiAdapter, errorHandler } = require("../../api");
const { URL_SERVICE_COURSE, HOST } = process.env;
const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = {
  create: async (req, res) => {
    try {
      const chapter = await api.post("/api/chapters", req.body);
      return res.json(chapter.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const chapter = await api.put(`/api/chapters/${id}`, req.body);
      return res.json(chapter.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  getAll: async (req, res) => {
    try {
      const chapters = await api.get("/api/chapters", {
        params: { ...req.query },
      });
      return res.json(chapters.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const chapter = await api.get(`/api/chapters/${id}`);
      return res.json(chapter.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const chapter = await api.delete(`/api/chapters/${id}`);
      return res.json(chapter.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
