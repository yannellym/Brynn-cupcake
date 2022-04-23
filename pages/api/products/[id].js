import axios from "axios";
import dbConnect from "../../../library/mongo"
import Product from "../../../models/Product"


export default async function handler(req, res) {
    const { 
        method, 
        query: { id }, //THIS QUERY IS WHAT WE SEND AFTER PRODUCTS => THE PARAMS(PRODUCT ID)
    } = req; 

    dbConnect();

    if(method === "GET"){
        try{
            const product = await Product.findById(id) //finds all the products
            res.status(200).json(product);
        } catch(err) {
            res.status(500).json(err);
        }
    }
    if(method === "PUT"){
        try{
           const product = await Product.create(req.body); //ADDS products to database
           res.status(201).json(product) //if adedd  successfully.
        }catch(err){
            res.status(500).json(err);
        }
    }
    if(method === "DELETE"){ // DELETES PRODUCTS from database
        try{
           const product = await Product.create(req.body);
           res.status(201).json(product) 
        }catch(err){
            res.status(500).json(err);
        }
    }
}