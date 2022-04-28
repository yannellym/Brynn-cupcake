import axios from "axios";
import Image from "next/image";
import styles from "../../styles/Order.module.css"


const  Order = ( { order }) => {
    const status = order.status;

    const statusClass = (index) => {
      if (index - status < 1) return styles.done;
      if (index - status === 1) return styles.inProgress;
      if (index - status > 1) return styles.undone;
    };

    return ( 
        <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>{order._id}</span>
              </td>
              <td>
                <span className={styles.id}>{order.title}</span>
              </td>
              <td>
                <span className={styles.name}>{order.customer}</span>
              </td>
              <td>
                <span className={styles.address}>{order.address}</span>
              </td>
              <td>
                <span className={styles.total}> ${order.total}</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/hero1.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/check.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/hero1.png" width={30} height={30} alt="" />
            <span>Notifying baker</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/check.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/hero1.png" width={30} height={30} alt="" />
            <span>Baking</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/check.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/hero1.png" width={30} height={30} alt="" />
            <span>Ready</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/check.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> $ {order.total}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ( { params }) => { //fetching the ID of the product
  const res = await axios.get(`${process.env.BASE_URL}/api/orders/${params.id}`);
  return {
    props:  {
      order: res.data,
    }
  }
}


export default Order;