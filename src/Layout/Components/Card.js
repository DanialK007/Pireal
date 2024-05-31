import styles from './Card.module.css';

function Card({image, title}){
    return(
        <>
            <div className={styles.Card}>
                <img src={image} alt="card_image" className={styles.CardImg}/>
                <h2>{title}</h2>
            </div>
        </>
    )
}

export default Card;