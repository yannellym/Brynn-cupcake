import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList'
import axios from 'axios'

export default function Home( { productList }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Cupcakes x Brynn</title>
        <meta name="description" content="Cupcakes and cakepops by Brynn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList productList={productList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props:  {
      productList : res.data,
    }
  }
}