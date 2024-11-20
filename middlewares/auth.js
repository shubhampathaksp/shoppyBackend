const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.protect = async (req, res, next) => {
    
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authentication token is missing" });
    }

    const token = authHeader.split(" ")[1];

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id }; 
        next(); 
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
};
