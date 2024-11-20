const express = require("express");
const {registerUser,loginUser} = require('../controller/authcontroller');
const {getProducts,getProductById,seedDatabase} = require("../controller/productController");
const {addToCart,updateCartItem,removeFromCart} = require("../controller/cartController");


const  {protect}  = require("../middlewares/auth");


const router = express.Router();



router.post('/register',registerUser);
router.post('/login',loginUser);
seedDatabase();
router.get('/products',getProducts);
router.get("/products/:id",getProductById);
router.post("/cart",protect,addToCart);
router.put("/:id",protect,updateCartItem);
router.delete("/:id",protect,removeFromCart);
module.exports = router;
