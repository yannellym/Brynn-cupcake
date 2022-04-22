import styles from "../styles/ProductList.module.css"
import CupcakeCard from "./CupcakeCard"

const ProductList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The best cupcakes around</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.wrapper}>
                <CupcakeCard />
                <CupcakeCard />
                <CupcakeCard />
                <CupcakeCard />
                <CupcakeCard />
            </div>
      </div>
      );
}
 
export default ProductList;