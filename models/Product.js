import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60,
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200,
    },
    img: {
        type: String,  // this uses external CDN. Can be use AWS, Firebase...
        required: true,
    },
    prices: {
        type: [Number], // this is put in brackets to only include an array of numbers. 
        required: true,    //if not done this way, the array can include any value; Booleans, strings...
    },
    extraOptions: {
     type: [       // each extra option will have a checkbox with the price and a text with the name of the extra option.
        {
            text: { type: String, required: true}, 
            price: { type: Number, required: true},
        }
      ],   
    },
 },
    { timestamps: true } // will give us an update with CREATED, AND UPDATED. If we create a new product, it'll give us a timestamp. 
);


export default  mongoose.models.Product || //if we have a product models, don't create it again. Use it.
mongoose.model("Product", ProductSchema); // If we don't have models in our DB, create a model in the DB.
                                                                                