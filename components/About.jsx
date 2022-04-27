import Image from "next/image";
import styles from "../styles/About.module.css"
const About = () => {
    return ( 
        <div className={styles.container} id="about">
            <h1 className={styles.title}>About Baked by Brynn</h1>
            <div className={styles.aboutmecontainer}>
                <p className={styles.aboutphoto}>
                    <Image src="/img/aboutphoto.png" className={styles.aboutphoto} height="550" width="500" alt="" />
                </p>
                <p className={styles.aboutme}>
                    At Baked by Brynn, we really like dessert. Perhaps, a little too much. 
                    We tend to think of ourselves as dessert archeologists - digging and 
                    researching and eating our way through the regional desserts of America. 
                    We spend a disproportionate amount of our vacation time in bakeries, 
                    chocolate shops, coffee houses, and used book stores. We spend almost 
                    all of our discretionary income on cake and coffee and cookies and wine.
                   
                </p>
            </div>
     </div>
    );
}
 
export default About;