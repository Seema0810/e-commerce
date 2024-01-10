const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the Order Schema
const orderSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    customerId:{
        type: Schema.Types.ObjectId,
        ref: 'User',                        // Use the model name 'User' here
        required: true
    },
    products:{
        type:Schema.Types.ObjectId,
        ref:'Product'                         // Use the model name 'Product' here
    }

  // You can add more fields as needed
});

// Create a Product model based on the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
