const { Router } = require("express");
const PostController = require("../controllers/PostController.js");
const multer = require("multer");
const { storage } = require("../multerConfig.js");
const upload = multer({ storage: storage });
const postController = new PostController();
const express = require("express");

const route = Router();

route.use("/files", express.static("uploads"));
route.post("/upload", upload.single("file"), (req, res) => {
  return res.json(req.file.filename);
});
route.post("/posts", (req, res) => {
  postController.criaRegistroController(req, res);
});
route.get("/posts", (req, res) => {
  postController.pegaTodosController(req, res);
});
route.get("/posts/:id", (req, res) =>
  postController.pegaUmRegistroPorIdController(req, res)
);
route.put("/posts/:id", (req, res) =>
  postController.atulizaDadoController(req, res)
);
route.delete("/posts/:id", (req, res) =>
  postController.excluiRegistroController(req, res)
);

module.exports = route;
