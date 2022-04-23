import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            <Image src="/img/hero3.png" alt="footer" layout="fill" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        NO OTHER BETTER CUPCAKES THAN MINE.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}> SOCIAL MEDIA</h1>
                    <p className={styles.text}>
                        2345 Butter Ave, CT, 1394I54
                    </p>
                    <p className={styles.text}>
                        2345 Butter Ave, CT, 1394I54
                    </p>
                    <p className={styles.text}>
                        2345 Butter Ave, CT, 1394I54
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}> WORKING HOURS</h1>
                    <p className={styles.text}>
                       TUESDAY TO SATURDAY
                       <br /> 12:00pm - 4:00pm
                    </p>
                </div>
            </div>
        </div>
      );
}
 
export default Footer;
