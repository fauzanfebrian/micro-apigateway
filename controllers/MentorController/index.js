const { apiAdapter, errorHandler } = require("../../api");
const { URL_SERVICE_COURSE } = process.env;
const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = {
  create: async (req, res) => {
    try {
      const mentors = await api.post("/api/mentors", req.body);
      return res.json(mentors.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const mentor = await api.put(`/api/mentors/${id}`, req.body);
      return res.json(mentor.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  getAll: async (req, res) => {
    try {
      const mentors = await api.get("/api/mentors");
      return res.json(mentors.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const mentor = await api.get(`/api/mentors/${id}`);
      return res.json(mentor.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const mentor = await api.delete(`/api/mentors/${id}`);
      return res.json(mentor.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
