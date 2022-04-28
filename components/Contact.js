import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../styles/Contact.module.css"
import Image from "next/image";


const Contact = () => {

    const [emailSent, setEmailSent] = useState(false);
    const [sent, setSent] = useState(false)

console.log(emailSent)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m0io8qr', 'template_nozw0nh', form.current, 'Von3vL9e5hbQRbQnR')
        .then((result) => {
            console.log(result.text);
            setEmailSent(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
      <div className={styles.container} id="contact">
        <h1>Contact Us</h1>
        <h4>Have a question? We're always here to lend a helping hand. </h4>
        <div className={styles.wrapper}>
            <Image src="/img/cupcakeset4.png" className={styles.contactphoto} height="500" width="500" alt="" />
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <label>Name</label>
                <input className={styles.input} type="text" required name="user_name" />
                <label>Email</label>
                <input type="email" className={styles.input} required name="user_email" />
                <label>Message</label>
                <textarea name="message" required className={styles.textarea}/>
                <input type="submit"  className={styles.submitbtn } value="Send" />
                <span className={emailSent? styles.visible : styles.hidden} >Thank you for your message, we will be in touch in no time!</span>
            </form>
        </div>
    </div>

  );
};

export default Contact;