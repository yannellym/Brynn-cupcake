import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/hero3.png" alt="footer" layout="fill" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h3 className={styles.motto}>
                       <i> &quot;The secret ingredient is always love&quot; - Kim Berube</i>
                    </h3>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}> SOCIAL MEDIA</h1>
                    <Link href="https://www.instagram.com/" passHref> 
                        <Image src="/img/insta.png" className={styles.social} alt="footer" width={50} height={50} /> 
                    </Link>
                    <Link href="https://www.facebook.com/" passHref> 
                        <Image src="/img/facebook.png" className={styles.social} alt="footer" width={50} height={50} />
                    </Link>
                    <Link href="https://www.linkedin.com/" passHref> 
                        <Image src="/img/in.png" className={styles.social} alt="footer" width={50} height={50} /> 
                    </Link>
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
