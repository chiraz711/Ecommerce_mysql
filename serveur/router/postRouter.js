const router= require("express").Router()
const postController=require("../controller/controller")
router.post("/api/createproduct",postController.addProduct)
router.get("/api/getproduct",postController.getProduct)
router.put("/api/updateproduct/:id",postController.updateProduct)
router.delete("/api/deleteproduct/:id",postController.deleteProduct)
module.exports={postrouter:router}