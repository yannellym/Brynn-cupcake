import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);  //gets the state from the cart reducer which is initially 0;
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                  <Link href="/">
                    <a>
                        <Image src="/img/hero2.png" alt="logo" width="80" height="90" />
                    </a>
                  </Link> 
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>CupcakesxBrynn</div>
   
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                        <li className={styles.listItem}>Home</li>
                    </Link>
                    <li className={styles.listItem}>About</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Link href="/cart" passHref>
                        <a>
                            <Image src="/img/cartWhite.png" alt="logo" width="30px" height="30px" />
                        </a>
                    </Link> 
                <div className={styles.counter}>{quantity}</div>
            </div>
            </div>
        </div>
    );
}
 
export default Navbar;
