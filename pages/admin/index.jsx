import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";



const Index = ( { orders, products }) => {

    const [productList, setProductList] = useState(products);
    const [orderList, setOrderList] = useState(orders);
    const status = ["Notifying Baker", "Baking", "Ready", "Complete"];

    const handleDelete = async (id) => {
        try{
            const res = await axios.delete(`${process.env.BASE_URL}` + id);
            setProductList(productList.filter((product) => product._id !== id ));  
            // this will look through the productlist and if it equals this ID, it will delete it.
            //If not, it will stay like this. 
            console.log("deleting")
        }catch (err){
            console.log(err)
        }
    }

    const handleStatus = async(id) =>{
        const item = orderList.filter(order => order._id === id)[0]; 
        // goes through the orderList array and gets the item that matches the id. This returns an array. 
        //We get the first item in the array at index 0.
        const currentStatus = item.status; 
        //We get the status of the item we just found

        try{
            const res = await axios.put(`${process.env.BASE_URL}` + id, { status: currentStatus + 1});
            //This will get the item we found above, its current status, and add one to it. 
            //By adding 1 to it, we will push from "Notifying baker" => "Baking" => "Ready" on every click.
            setOrderList([
                res.data, //this will add the new status we just got above.
                ...orderList.filter(order => order._id !== id) // this will delete the order in the order list. 
            ])
    
        }catch(err){
            console.log(err);
        }
    }



    return (
        <div>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h1 className={styles.title}> My Products 🧁 </h1>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.trTitle}>
                                <th className={styles.image}>Image</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th className={styles.prices}>Prices</th>
                                <th className={styles.action}>Action</th>
                            </tr>
                        </tbody>
                    </table>
                    <table className={styles.table}>
                        {productList.map(product => (
                            <tbody key={product._id}>
                            <tr className={styles.trTitle1}>
                                <td>
                                    <Image 
                                        src={product.img}
                                        width={100}
                                        height={60}
                                        objectFit="cover"
                                        alt=""
                                    />
                                </td>
                                <td>{product._id.slice(0,5)}...</td>
                                <td>{product.title}</td>
                                <td>{product.prices.map(num => "$" + num + ", " )}</td>
                                <td>
                                    <button className={styles.button1} onClick={ () => handleDelete(product._id) }>Delete Item</button> 
                                </td>
                            </tr>
                        </tbody>
                        ) 
                        )}
                    </table>    
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}> Current Orders 📝  </h1>
                    <table className={styles.table2}>
                        <tbody>
                            <tr className={styles.trTitle1}>
                                <th>ID</th>
                                <th>Product</th>
                                <th>Customer</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Next step</th>
                            </tr>
                        </tbody>
                            {orderList.map( order => (
                                <tbody key={order._id}>
                            <tr className={styles.trTitle1}>
                                <td> {order._id.slice(0,7)}... </td>
                                <td> {order.title}</td>
                                <td> {order.customer}</td>
                                <td> {order.total} </td>
                                <td> {order.method === 1 && <span>PAID</span>} </td>
                                <td> {status[order.status]}</td>
                                <td>
                                    <button className={styles.button} onClick={ () => handleStatus(order._id) }>
                                        Next Stage
                                    </button>
                                </td>
                            </tr>
                        </tbody> 
                            ))}
                    </table>
                </div>
            </div>
        </div>
    )
}


export const getServerSideProps = async ( context ) => {
    const myCookie =  context.req?.cookies || ""; 
    if(myCookie.token !== process.env.TOKEN){
        return{
            redirect: {
                destination: "/admin/login",  // will redirect to login if the cookie doesn't match
                permanent: false,
            },
        };
    }
    const productRes = await axios.get(`${process.env.BASE_URL}/api/products`);
    const orderRes = await axios.get(`${process.env.BASE_URL}/api/orders`);

    return {
        props: {
            orders : orderRes.data,
            products: productRes.data,
        },
    };
};
export default Index;