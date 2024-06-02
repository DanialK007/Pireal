import { Parallax, Background } from 'react-parallax';
import styles from './AnotherPage.module.css';
import image from './img/promo-layouts.png';
import Bg from './img/promo-bg-1.jpg';
import useIntersectionObserver from '../useIntersectionObserver';

function AnotherPage(){
    
    return (
        <Parallax strength={300} className={styles.Container}>
            <Background>
                <img src={Bg} />
            </Background>
            <div className={styles.Content}>    
                <h1>20+ Different Portfolio Layouts</h1>
                <p>Beautiful Portfolio Styles to present your Work</p>
                <img src={image} className={styles.Img}/>
            </div>
        </Parallax>
    );
}

export default AnotherPage