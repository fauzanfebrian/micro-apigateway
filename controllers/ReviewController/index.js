const { apiAdapter, errorHandler } = require("../../api");
const { URL_SERVICE_COURSE, HOST } = process.env;
const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = {
  create: async (req, res) => {
    try {
      req.body.user_id = req.user.id;
      const review = await api.post("/api/reviews", req.body);
      return res.json(review.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const review = await api.put(`/api/reviews/${id}`, req.body);
      return res.json(review.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const review = await api.delete(`/api/reviews/${id}`);
      return res.json(review.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
