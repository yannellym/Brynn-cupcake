import dbConnect from "../../../library/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
    const { method, query: {id} } = req;

    await dbConnect();

    if(method === "GET"){
        try{
            const order = await Order.findById(id);
            res.status(200).json(order);
        }catch(err){
            res.status(500).json(err);
        }
    }
    if(method === "PUT"){
        try{
           const order = await Order.findByIdAndUpdate(id, req.body, {
                new: true,
            }); //ADDS products to database
            res.status(201).json(order) //if adedd  successfully.
         }catch(err){
             res.status(500).json(err);
         }
    }
    if(method === "DELETE"){
        
    }
}

export default handler;