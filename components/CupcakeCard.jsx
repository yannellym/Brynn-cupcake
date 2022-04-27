import styles from '../styles/CupcakeCard.module.css'
import Image from "next/image";
import Link from 'next/link';


const CupcakeCard = ( { product }) => {
    return (
        <div className={styles.container}>   
             <Link href={`/products/${product._id}`} passHref>   
                <Image src={product.img} className={styles.productimg} alt="" width="500" height="500" /> 
             </Link>
             <h1 className={styles.title}>{product.title}</h1>
             <span className={styles.prices}> $ {product.prices[0]}</span>
             <p className={styles.desc}>
                 {product.desc}
             </p>
        </div>
      );
}
 
export default CupcakeCard;