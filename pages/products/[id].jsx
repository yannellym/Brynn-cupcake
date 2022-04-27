import styles from '../../styles/Product.module.css';
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { cartOutline } from "ionicons/icons";
import { useRef } from 'react';

const Product = ( { product }) => {
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(product.prices[0]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    

        const animationRef = useRef();
     
    const changePrice = (number) => {  // This func will change the price according to the size chosen.
        setPrice(price + number) 
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
        //Example #1, if the user chooses mini cupcakes => Price will be 12.99, size is 0. 12.99 - 12.99. Difference = 0
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
    const handleChange = (e, option) => {  //if the input was checked, we will add the 
        const checked = e.target.checked;

        if(checked){  //if the input is checked
            changePrice(option.price); // change the price to the value of the option passed(extra ingredient)
            setExtras(extraIngredients => [...extraIngredients, option]) //take all the previous values in setExtras and return them PLUS add the new option.
        }else{
            changePrice(-option.price); // if you dont 
            setExtras(extras.filter(extra => extra._id !== option._id)); 
            //take our array of extras and filter through it.
            //if the ID of option that was clicked does not equal the id of the option that was passed into this function, keep it inside.
            //if they're equal, remove it. This removes it by using the filter function on the array. 
        }
    }

    const handleClick = () => {
       
        dispatch(addProduct({...product, price, quantity, title}));  //passess a payload with the addProduct reducer. Returns product price, details, quantity, extras, and price.
    };



    return (
        <div className={styles.container}>
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
                    <div className={styles.size} onClick={ () => handleSize(0)}> 
                        <Image src="/img/sizes.jpg" layout="fill" alt="" />
                        <span className={styles.number}>Mini</span>
                    </div>
                    <div className={styles.size} onClick={ () => handleSize(1)}>
                        <Image src="/img/sizes.jpg" layout="fill" alt="" />
                        <span className={styles.number}>Standard</span>
                    </div>
                    <div className={styles.size} onClick={ () => handleSize(2)}>
                        <Image src="/img/sizes.jpg" layout="fill" alt="" />
                        <span className={styles.number}>Gourmet</span>
                    </div>
                </div>
                <h3>Product Details</h3>
                <p className={styles.desc}>{product.desc}</p>
                <h5> 
                    Please contact us with specific requests and/<br />
                    or any allergies to ingredients like peanut butter.
                </h5>
                
                <div className={styles.add}>
                    <input 
                        type="number" 
                        defaultValue={1} 
                        className={styles.quantity} 
                        onChange={(e) => setQuantity(e.target.value)} //will update the quantity based on input chosen

                    />
                    <button className={styles.button} onClick={handleClick}> Add to cart </button>
                   
                <div className={styles.wrap}>
                <button className={styles.btn}>Submit</button>
                </div>
                </div>
            </div>
        </div>
      );
}

export const getServerSideProps = async ( { params }) => { //fetching the ID of the product
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
      props:  {
        product : res.data,
      }
    }
  }

 
export default Product;