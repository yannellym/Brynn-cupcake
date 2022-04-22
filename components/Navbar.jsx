import styles from "../styles/Navbar.module.css"
import Image from "next/image";
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/hero2.png" alt="logo" width="80" height="90" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>CupcakesxBrynn</div>
   
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>About</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cartWhite.png" alt="logo" width="30px" height="30px" />
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;
