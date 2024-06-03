import { useState } from 'react';
import styles from './MenuBar.module.css';
import { Link } from 'react-router-dom';

function MenuBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={styles.MenuBar}>
                <button id='menuBtn' onClick={toggleMenu}>|||</button>
            </div>
            <div className={`${styles.Menu} ${isMenuOpen ? styles.show : ''}`}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/work'>Work</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/pricing'>Pricing</Link>
            </div>
        </>
    )
}

export default MenuBar;
