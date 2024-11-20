const Cart = require("../modles/Cart");
const Product = require("../modles/Product");

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });

        let cart = await Cart.findOne({ userId: req.user.id });

        if (!cart) {
            cart = await Cart.create({
                userId: req.user.id,
                item: [{ productId, quantity }],
            });
        } else {
            const existingItem = cart.item.find(
                (item) => item.productId.toString() === productId
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.item.push({ productId, quantity });
            }

            await cart.save();
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCartItem = async (req, res) => {
    const {quantity} = req.body;

    try{
        const cart = await Cart.findOne({userId: req.user.id});
        if(!cart) return res.status(404).json({message:"Cart not found"});

        const item = cart.items.id(req.params.id);
        if(!item) return res.status(404).json({message: "Item not found in cart"});
        item.quantity = quantity;
        await cart.save();

        res.json(cart);
    }catch (error){
        res.status(500).json({message: error.message});
    }
};

exports.removeFromCart = async (req, res) => {
    try{
        const cart = await Cart.findOne({userId: req.user.id});
        if(!cart) return res.status(404).json({message: "Cart not Found"});

        cart.item.id(req.params.id).remove();
        await cart.save();

        res.json(cart);
    }catch (error){
        res.status(500).json({message: error.message});
    }
};
