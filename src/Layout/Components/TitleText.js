import { useState } from 'react';
import styles from './TitleText.module.css';

// TitleArray must have two keys --> btn, text

function TitleText({TitleArray}){


    const [currentText, setCurrentText ] = useState(TitleArray[0].text);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index, text) => {
        setCurrentText(text);
        setActiveIndex(index);
    }

    return (
        <div className={styles.Title}>
            <div className={styles.TitleButtons}>
                {
                    TitleArray.map((Title, index) => {
                        return (
                            <button 
                            key={index} 
                            style={{ opacity: activeIndex === index ? 1 : 0.5 }} 
                            className={styles.TitleBtn} 
                            onClick={() => handleClick(index, Title.text)}>
                                {Title.btn}
                            </button>
                        )
                    })
                }
            </div>
            <div className={styles.TitleText}>
                <p>{currentText}</p>
            </div>
        </div>
    )
}

export default TitleText;