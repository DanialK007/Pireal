import styles from './Card2.module.css';

function Card2({caption, detail, img}){
    return(
        <>
            <div className={styles.CardItem}>
                <a href='#' className={styles.CardCap}>
                    <h1>{caption}</h1>
                    <p>{detail}</p>
                </a>
                <img src={img} alt='' className={styles.CardImg}/>
            </div>
        </>
    )
}

export default Card2;