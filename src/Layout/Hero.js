import { Parallax, Background } from 'react-parallax';
import styles from './Hero.module.css';
import MyButton from './Components/MyButton';
import Bg from './img/background.png';

function Hero(){
    return (
        <>
            <Parallax strength={200} className={styles.Hero}>
                <Background>
                    <img src={Bg} alt="fill murray" className={styles.HeroBg}/>
                </Background>
                <div className={styles.HeroLayer}>
                    <div className={styles.HeroTitle}>Welcome to Pireal</div>
                    <div className={styles.HeroSubtitle}>A high-performance MultiPurpose Portfolio HTML Template suitable for any kind of creators.
This is ideal for creating your creative professional portfolio, corporate website, or for creating
your client's website if you are an Agency or a Freelancer.</div>
                    <MyButton>Purchase Now $30</MyButton>
                </div>
            </Parallax>
        </>
    )
}

export default Hero;