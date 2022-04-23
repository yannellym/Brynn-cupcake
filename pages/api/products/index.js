import dbConnect from "../../../library/mongo"
import Product from "../../../models/Product"

export default async function handler(req, res) {
    const { method } = req; //GET POST PUT DELETE

    dbConnect();

    if(method === "GET"){
        try{
            const products = await Product.find() //finds all the products
            res.status(200).json(products);
        } catch(err) {
            res.status(500).json(err);
        }
    }
    if(method === "POST"){
        try{
           const product = await Product.create(req.body);
           res.status(201).json(product) //if adedd  successfully.
        }catch(err){
            res.status(500).json(err);
        }
    }
}