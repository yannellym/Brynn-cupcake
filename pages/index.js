import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cupcakes x Brynn</title>
        <meta name="description" content="Cupcakes and cakepops by Brynn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList />
    </div>
  )
}
