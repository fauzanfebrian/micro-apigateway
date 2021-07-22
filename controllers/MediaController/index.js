const { apiAdapter, errorHandler } = require("../../api");
const { URL_SERVICE_MEDIA } = process.env;
const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = {
  create: async (req, res) => {
    try {
      const media = await api.post("/media", req.body);
      return res.json(media.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const media = await api.delete(`/media/${id}`);
      return res.json(media.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  getAll: async (req, res) => {
    try {
      const media = await api.get("/media");
      return res.json(media.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
