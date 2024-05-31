import styles from './AnotherPage.module.css';
import image from './img/promo-layouts.png';
import useIntersectionObserver from '../useIntersectionObserver';

function AnotherPage(){
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

    return (
        <div ref={ref} className={`${styles.CardWrapper} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.Container}>
                <h1>20+ Different Portfolio Layouts</h1>
                <p>Beautiful Portfolio Styles to present your Work</p>
                <img src={image} className={styles.Img}/>
            </div>
        </div>
    );
}

export default AnotherPage