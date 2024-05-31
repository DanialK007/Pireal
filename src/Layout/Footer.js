import styles from './Footer.module.css';
import MyButton from './Components/MyButton';

function Footer() {
    return (
        <>
            <footer className={styles.Footer}>
                <div className={styles.FooterCap}>
                    <h1>Let's Create with Pireal</h1>
                    <p>Pireal is all that you need to create your creative website.<br/>
                        Start enjoying your creativity already today.</p>
                    <MyButton>Purchase Now $30</MyButton>
                </div>
            </footer>
            <div className={styles.FooterLine}>© 2024 Pireal. All rights reserved. Design by Robirurk. Code by Danial.</div>
        </>
    );
}

export default Footer;