import styles from './contact.module.css'
import Head from "next/head";

export default function Contact() {
    return (
        <div className={styles.container}>
                    <h1>Contact Us</h1>
                    <p>Have questions, suggestions, or just want to say hello? We&#39;d love to hear from you!
                        Feel free to reach out to us via email at:{' '}
                        <a href="mailto:vedantbhavsar.a10@gmail.com" style={{textDecoration:'underline', color:'lightblue'}}>info@diaryblog.com</a>
                    </p>
        </div>
    );
};
