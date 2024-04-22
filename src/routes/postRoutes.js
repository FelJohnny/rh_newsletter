const { Router } = require("express");
const PostController = require("../controllers/PostController.js");
const uploadImg = require('../../middlewares/multerUploadImg.js');
const checkTokenLogin = require('../../middlewares/checkTokenLogin.js')


const postController = new PostController();


//necessario para impedir a criação de imagem no disco antes de ir para a cria_post
// async function verificaCampoVazio(req,res){
//     console.log(req.body);
//     const isTrue = await postController.allowNull(req, res);
//     if(!isTrue.status){
//     console.log("a");

//         return res.status(400).json({
//             message: 'Preencha todos os campos necessarios',
//             campos: isTrue.campos,
//             error: true,
//           });
//     }
//     return true
// }
const route = Router();

route.post("/rh_news/posts", checkTokenLogin, uploadImg.single("img_post"), (req, res) => postController.criaPostController(req, res));
route.get("/rh_news/posts", (req, res) => postController.pegaTodosPostController(req, res));
route.get("/rh_news/posts/:id", (req, res) => postController.pegaPostPorIdController(req, res));
route.put("/rh_news/posts/:id", checkTokenLogin, (req, res) => postController.atulizaDadoController(req, res));
route.delete("/rh_news/posts/:id", checkTokenLogin, (req, res) => postController.excluiRegistroController(req, res));

module.exports = route;