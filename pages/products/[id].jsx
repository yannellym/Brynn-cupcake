import styles from '../../styles/Product.module.css';
import Image from "next/image";
import { useState } from 'react';

const Product = () => {
    const [size, setSize] =useState(0);
    const cupcake = {
        id: 1,
        img: "/img/hero4.png",
        name: "carrot cupcake",
        price: [12.99, 24.99, 36.99],
        desc: "lorem ipsum dolor sit amet. Lorem ipsum dolor sit"
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={cupcake.img} objectFit="contain" layout="fill" alt="cupcake" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{cupcake.name}</h1>
                <span className={styles.price}> ${cupcake.price[size]}</span>
                <p className={styles.desc}>{cupcake.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={ () => setSize(0)}>
                        <Image src={cupcake.img} layout="fill" alt="" />
                        <span className={styles.number}>Mini</span>
                    </div>
                    <div className={styles.size} onClick={ () => setSize(1)}>
                        <Image src={cupcake.img} layout="fill" alt="" />
                        <span className={styles.number}>Standard</span>
                    </div>
                    <div className={styles.size} onClick={ () => setSize(2)}>
                        <Image src={cupcake.img} layout="fill" alt="" />
                        <span className={styles.number}>Gourmet</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input 
                            className={styles.checkbox}
                            type="checkbox" 
                            name="sprinkles" 
                            id="sprinkles"
                        />
                        <label htmlFor="sprinkles">Sprinkles</label>
                    </div>
                    <div className={styles.option}>
                        <input 
                            className={styles.checkbox}
                            type="checkbox" 
                            name="coconutFlakes" 
                            id="coconutFlakes"
                        />
                        <label htmlFor="coconutFlakes">Coconut Flakes</label>
                    </div>
                    <div className={styles.option}>
                        <input 
                            className={styles.checkbox}
                            type="checkbox" 
                            name="miniMarshmallows" 
                            id="miniMarshmallows"
                        />
                        <label htmlFor="miniMarshmallows">Mini marshmallows</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}> Add to cart </button>
                </div>
            </div>
        </div>
      );
}
 
export default Product;