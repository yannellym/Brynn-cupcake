import styles from "../styles/ProductList.module.css"
import CupcakeCard from "./CupcakeCard"

const ProductList = ( { productList }) => {
    return (
        <div className={styles.container} id="menu">
            <h1 className={styles.title}>Menu</h1>
            <p className={styles.desc}>
                Baked by Brynn strives to make 
                America’s favorite baked goods the old-fashioned
                way: from scratch, in small batches, 
                and using the finest ingredients. We pride ourselves 
                on using all natural ingredients and avoiding excessive amounts of sugar.
                All of our products are made and baked fresh everyday. Try our signature 
                base flavors or ask about our seasonal flavors.
            </p>
            <div className={styles.wrapper}>
                {productList.map((product) => (
                    <CupcakeCard key={product._id} product={product} />
                ))}
            </div>
      </div>
      );
}
 
export default ProductList;