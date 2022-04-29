import styles from '../../styles/Product.module.css';
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { cartOutline } from "ionicons/icons";
import { useRef } from 'react';
import { useRouter } from 'next/router'

const Product = ( { product }) => {
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(product.prices[0]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [selected, setSelected] = useState(false);
    const [mini, setMini] = useState(false);
    const [standard, setStandard] = useState(false);
    const [gourmet, setGourmet] = useState(false);

    const router = useRouter() // TO GO BACK

    const animationRef = useRef();
     
    const changePrice = (number) => {  // This func will change the price according to the size chosen.
        setPrice(price ) 
        // price will now be set to price(0) + the number received.
        //Example #1, 0 is the difference . Price(12.99 + 0 = 12.99). Price is 12.99
        //Example #2, 12 is the difference . Price(12.99 + 12 = 24.99). Price is 24.99 
    }
    const handleSize = (sizeIndex) => { 
        //this size index comes from the handleSize func below. It gives the index of the sizes
        // The prices are [12.99, 24.99, 32.99]. Each one represents a dozen based on the size (mini, standard, gourmet)
        // The sizeIndex will either represent 12.99(0), 24.99 (1) or 32.99 (2)
        const difference = product.prices[sizeIndex] - product.prices[size]; 
        //This takes the index of the size' price and subtracts size (this will be 12.99 because size = 0. Product.prices[0] is 12.99)
    
        //Example #2, if the user chooses standard cupcakes => price will be 24.99, size is 0. 24.99 - 12.99. Difference = 12.  
        setSize(sizeIndex);
        //sets the size to the sizeIndex we received when the user clicked on the size option 
        //Example #1,the size will now be 0 (represents 12.99)
        //Example #2, the size will now be 1 (represents 24.99)
        changePrice(difference);
        //calls the function changePrice and gives it the difference parameter
        //Example #1, will send 0 as the difference  
        //Example #2, will send 12 as the difference 
        setTitle(product.title) 
    }


    const highlightStandard = () => {
        setStandard(true);
    }

    const handleClick = () => {
       
        dispatch(addProduct({...product, price, quantity, title, size}));  //passess a payload with the addProduct reducer. Returns product price, details, quantity, extras, and price.
    };



    return (
        <div className={styles.container}>
            <div className={styles.back}> 
                <Image onClick={() => router.back()} src="/img/back.png" objectFit="contain" width={50} height={50} alt="cupcake" />
            </div>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={product.img}  objectFit="contain" layout="fill" alt="cupcake" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{product.title}</h1>
                <span className={styles.price}> ${price}</span>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={ () => handleSize(1)}>
                        <Image className={standard && styles.highlight} onClick={highlightStandard} src="/img/sizes.jpg" layout="fill" alt="" />
                        <span className={styles.number}>Standard</span>
                    </div>
                </div>
                <h3>Product Details</h3>
                <p className={styles.desc}>{product.desc}</p>
                <h5> 
                    Please contact us with specific requests and/<br />
                    or any allergies to ingredients like peanut butter.
                </h5>
                
                <div className={styles.add}>
                <label htmlFor="number"><strong>Quantity : </strong> </label>
                    <input 
                        type="number" 
                        defaultValue={1} 
                        min="1"
                        className={styles.quantity}
                        onChange={(e) => setQuantity(e.target.value)} //will update the quantity based on input chosen
                    />
                    <div className={styles.wrap}>
                        <button className={standard? styles.btn : styles.disabled} onClick={handleClick}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
      );
}

export const getServerSideProps = async ( { params }) => { //fetching the ID of the product
    const res = await axios.get(`${process.env.BASE_URL}/api/products/${params.id}`);
    return {
      props:  {
        product : res.data,
      }
    }
  }

 
export default Product;