import styles from './Footer2.module.css';

function Footer2() {
    return(
        <>
            <div className={styles.Footer2}>
                <div className={styles.Footer2Content}>
                    <div className={styles.Footer2Logo}>
                        <h1>Pireal Design, Inc</h1>
                        <p>© 2017 Piroll. All rights reserved.</p>
                        <p>Design by robirurk. Code by nK.</p>
                    </div>
                    <div>
                        <p>kaungkhantkyawdk@gmail.com</p>
                        <p>+959 255 599 863</p>
                    </div>
                    <div className={styles.Footer2Side}>
                        <div className={styles.Footer2Nav}>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Contact</a>
                            <a href="">Services</a>
                        </div>
                        <div className={styles.Footer2Social}>
                            <a href="">Facebook</a>
                            <a href="">Twitter</a>
                            <a href="">Instagram</a>
                            <a href="">Dribble</a>
                        </div>
                    </div>
                </div>
                <div className={styles.Footer2Copyright}></div>
            </div>
        </>
    )
}

export default Footer2;