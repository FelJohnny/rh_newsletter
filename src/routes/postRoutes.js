const { Router } = require("express");
const PostController = require("../controllers/PostController.js");
const multer = require("multer");
const { storage } = require("../multerConfig.js");
const upload = multer({ storage: storage });
const postController = new PostController();
const express = require("express");

const route = Router();

route.use("/files", express.static("uploads"));
route.post("/rh_news/upload", upload.single("file"), (req, res) => {
  return res.json(req.file.filename);
});
route.post("/rh_news/posts", (req, res) => {
  postController.criaRegistroController(req, res);
});
route.get("/rh_news/posts", (req, res) => {
  postController.pegaTodosController(req, res);
});
route.get("/rh_news/posts/:id", (req, res) =>
  postController.pegaUmRegistroPorIdController(req, res)
);
route.put("/rh_news/posts/:id", (req, res) =>
  postController.atulizaDadoController(req, res)
);
route.delete("/rh_news/posts/:id", (req, res) =>
  postController.excluiRegistroController(req, res)
);

module.exports = route;
