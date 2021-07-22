const { apiAdapter, errorHandler } = require("../../api");
const { URL_SERVICE_ORDER } = process.env;
const api = apiAdapter(URL_SERVICE_ORDER);

module.exports = {
  getAll: async (req, res) => {
    const { id } = req.user;
    try {
      const order = await api.get("/api/orders", {
        params: { user_id: id },
      });
      return res.json(order.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
