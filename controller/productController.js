const Product = require("../modles/Product");
const ProductAll = require('../data/ProductAll.json');

exports.seedDatabase = async () => {
    try{
        await Product.deleteMany({});
        await Product.insertMany(ProductAll);
        console.log("Data seede successfully");
    }catch (error) {
        console.log('Error seeding database:', error);
    }
}

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({
                message: "Product not found"
            });
        }else{
            res.status(200).json(product);
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}