const { apiAdapter, errorHandler } = require("../../api");
const { URL_SERVICE_COURSE, HOST } = process.env;
const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = {
  create: async (req, res) => {
    try {
      const course = await api.post("/api/courses", req.body);
      return res.json(course.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await api.put(`/api/courses/${id}`, req.body);
      return res.json(course.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  getAll: async (req, res) => {
    try {
      const courses = await api.get("/api/courses", {
        params: { ...req.query },
      });
      const coursesData = courses.data;

      //   change the host from service user host to api gateway
      const firstPage = coursesData.data.first_page_url.split("?").pop();
      const lastPage = coursesData.data.last_page_url.split("?").pop();
      const links = coursesData.data.links.map((item, index) => ({
        ...item,
        url: item.url ? `${HOST}/courses?${item.url.split("?").pop()}` : null,
      }));

      coursesData.data.first_page_url = `${HOST}/courses?${firstPage}`;
      coursesData.data.last_page_url = `${HOST}/courses?${lastPage}`;
      coursesData.data.path = `${HOST}/courses`;
      coursesData.data.links = links;

      if (coursesData.data.next_page_url) {
        const nextPage = coursesData.data.next_page_url.split("?").pop();
        coursesData.data.next_page_url = `${HOST}/courses?${nextPage}`;
      }
      if (coursesData.data.prev_page_url) {
        const prevPage = coursesData.data.prev_page_url.split("?").pop();
        coursesData.data.prev_page_url = `${HOST}/courses?${prevPage}`;
      }

      return res.json(coursesData);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await api.get(`/api/courses/${id}`);
      return res.json(course.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await api.delete(`/api/courses/${id}`);
      return res.json(course.data);
    } catch (err) {
      return errorHandler(req, res, err);
    }
  },
};
