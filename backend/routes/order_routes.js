const express = require("express");
const router = express.Router();
const Order = require("../models/order_models");
const auth = require("../middleware/protectedresource");
// const { upload } = require("../routes/file_routes");

// creating an endpoint to create an order
router.post("/api/createorder", auth, async(req,res)=>{
    try {
        const { amount, productRef, quantity } = req.body;
        const custId = req.user._id;

        // Checking if custId, amount, productRef, and quantity are provided
        if (!amount || !custId || !productRef || !quantity) {
            return res.status(400).json({
                message: "Invalid request. Please provide amount, custId, productRef, and quantity.",
            });
        }

        const productToAdd = { productRef, quantity };

        const createOrder = new Order({
            amount: amount,
            products: [productToAdd], // Add the product details to the products array
            customerId: custId,
        });

        const orderCreated = await createOrder.save();
        res.status(201).json(orderCreated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}); 

module.exports = router;