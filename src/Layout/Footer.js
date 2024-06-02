import styles from './Footer.module.css';
import MyButton from './Components/MyButton';
import Bg from './img/promo-bg-2crop.jpg';
import { Background, Parallax } from 'react-parallax';

function Footer() {
    return (
        <>
            <Parallax strength={300} className={styles.Footer}>
                <Background>
                    <img src={Bg} className={styles.FooterBg} />
                </Background>
                <div className={styles.FooterCap}>
                    <h1>Let's Create with Pireal</h1>
                    <p>Pireal is all that you need to create your creative website.<br/>
                        Start enjoying your creativity already today.</p>
                    <MyButton>Purchase Now $30</MyButton>
                </div>
            </Parallax>
            <div className={styles.FooterLine}>© 2024 Pireal. All rights reserved. Design by Robirurk. Code by Danial.</div>
        </>
    );
}

export default Footer;