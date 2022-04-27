import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList'
import About from '../components/About'
import axios from 'axios'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import { useState } from 'react'

export default function Home( { productList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cupcakes x Brynn</title>
        <meta name="description" content="Cupcakes and cakepops by Brynn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <About />
      {admin && <span> <AddButton setClose={setClose} /> </span>}
      <ProductList productList={productList} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || "";
  let admin = false;

  if(myCookie.token === process.env.TOKEN){
    admin = true ; //if the cookie matches, admin is logged in
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props:  {
      productList : res.data,
      admin
    }
  }
}