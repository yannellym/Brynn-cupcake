import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
        maxlength: 60,
    },
    address: {
        type: String,
        required: true,
        maxlength: 200,
    },
    total: {
        type: Number, 
        required: true,
    },
    status: {
        type: Number,
        default: 0,  //when the customer makes a new payment, the status will be 0.
    },
    method: {           //when user pays, this method will change to either 0 or 1.
        type: Number,    
       required: true,
    },
 },
    { timestamps: true } // will give us an update with CREATED, AND UPDATED. If we create a new product, it'll give us a timestamp. 
);


export default  mongoose.models.Order || //if we have an order models, don't create it again. Use it.
mongoose.model("Order", OrderSchema); // If we don't have models in our DB, create a model in the DB.
                                                                                