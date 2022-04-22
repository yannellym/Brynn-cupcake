import styles from '../styles/CupcakeCard.module.css'
import Image from "next/image";

const CupcakeCard = () => {
    return (
        <div className={styles.container}>
             <Image src="/img/hero4.png" alt="" width="500" height="500" />
             <h1 className={styles.title}>Choco Flav</h1>
             <span className={styles.price}>$12</span>
             <p className={styles.desc}>
                 Lorem ipsum dolor sit amet, consectetur adipisicing 
                 elit. Ex quo veritatis provident. Nobis quo aliquam 
                 illo quam corrupti magni omnis. 
             </p>
        </div>
      );
}
 
export default CupcakeCard;