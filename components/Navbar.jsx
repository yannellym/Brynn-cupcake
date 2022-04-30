import styles from "../styles/Navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);  //gets the state from the cart reducer which is initially 0;
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.logo}>
                  <Link href="/">
                    <a>
                        <Image src="/img/hero3.png" alt="logo" width="70" height="90" />
                    </a>
                  </Link> 
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Baked by Brynn</div>
   
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                        <li className={styles.listItem}>Home</li>
                    </Link>
                    <Link href="/#about" passHref>
                        <li className={styles.listItem}>About</li>
                    </Link>
                    <Link href="/#menu" passHref>
                        <li className={styles.listItem}>Menu</li>
                    </Link>
                    <Link href="/#contact" passHref>
                        <li className={styles.listItem}>Contact</li>
                    </Link>
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
