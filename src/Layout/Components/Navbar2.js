import styles from './Navbar2.module.css';
import logo from '../img/logo-light.svg';
import { Link } from 'react-router-dom';

function Navbar2(){
    return (
        <nav className={styles.Nav}>
            <a href="#" className={styles.Logo}>
                <img src={logo} alt="Logo" className={styles.LogoImg} />
            </a>
            <div className={styles.NavLinks}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/work'>Work</Link>
                <Link to='/blog'>Blog</Link>
                <Link to=''>Contact</Link>
                <Link to=''>Pricing</Link>
            </div>
        </nav>
    )
}

export default Navbar2;