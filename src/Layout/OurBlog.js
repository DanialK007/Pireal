import styles from './OurBlog.module.css';

function OurBlog() {
    return(
        <>
            <div className={styles.Blog}>
                <div className={styles.BlogCap}>
                    <h1>Our Blog</h1>
                    <p>I am a Frontend Developer based in Mandalay, specializing <br/>
in User Interface Design and Development.</p>
                </div>
            </div>
        </>
    )
}

export default OurBlog;