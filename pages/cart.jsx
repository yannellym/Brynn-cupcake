import Image from "next/image";
import styles from "../styles/Cart.module.css"
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image 
                                    src="/img/hero4.png" 
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Cupcake </span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                sprinkles, and coconut flakes
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}> $12.99</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$36.99</span>
                        </td>
                    </tr>
                    
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal: </b>
                        $40
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total: </b>
                        $45
                    </div>
                    <button className={styles.button}>CHECK OUT</button>
                </div>
            </div>
        </div>
      );
}
 
export default Cart;