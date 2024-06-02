import { Parallax, Background } from 'react-parallax';
import styles from './MyParallax.module.css';
import bg from '../img/background.png';

const MyParallax = () => (
    <Parallax strength={300} className={styles.MyParallax}>
        <Background className="custom-bg">
            <img src={bg} alt="fill murray" />
        </Background>
    </Parallax>
);

export default MyParallax;