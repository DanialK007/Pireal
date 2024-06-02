import { useState } from 'react';
import styles from './History.module.css';
import MyButton from './Components/MyButton';
import Footer from './Footer';
import TitleText from './Components/TitleText';

import bag from './img/bag.svg';
import clock from './img/clock.svg';
import star from './img/star.svg';
import heart from './img/heart.svg';
import desk from './img/desk.jpeg';
import signature from './img/signature.png';
import { Background, Parallax } from 'react-parallax';

const missions = [
    {btn: "My History", text: "Seed may air multiply evening. Life in she'd Sixth lights likeness he for the. Of from hath fi ll of years fowl gathering you're every rule whose. Life meat tree give seas thing midst made called face have that."},
    {btn: "My Mission", text: "I light is for second, seas let third beginning shall our was void in hath evening and, beast beginning night signs replenish gathered void midst very have two beast he let seasons you meat. Behold doesn't face."},
    {btn: "My Principles", text: "Days they're a image appear creepeth wherein. Waters. Over midst abundantly open Greater. Thing whose meat replenish, male. Behold a fish dry under herb fifth he from our evening moveth bring."}
]

function History() {
    return (
        <>
            <div className={styles.MainHistory}>
                <div className={styles.History}>
                    <div className={styles.HistoryItem}>
                        <img src={bag} alt="bag" />
                        <p>120+ <br/>Projects Completed</p>
                    </div>
                    <div className={styles.HistoryItem}>
                        <img src={clock} alt="bag" />
                        <p>895 <br/>Working Hours</p>
                    </div>
                    <div className={styles.HistoryItem}>
                        <img src={star} alt="bag" />
                        <p>65+ <br/>Positive Feedbacks</p>
                    </div>
                    <div className={styles.HistoryItem}>
                        <img src={heart} alt="bag" />
                        <p>20+ <br/>Happy Clients</p>
                    </div>
                </div>
                <TitleText  TitleArray={missions} />
                <div className={styles.AboutMe}>
                    <Parallax strength={200} className={styles.ImageContainer}>
                        <Background>
                        <img src={desk} className={styles.Desk}/>
                        <div className={styles.ImageLayer}></div>
                        </Background>
                    </Parallax>
                    <div className={styles.AboutMeText}>
                        <h1>About Me</h1>
                        <p>I am a professional web designer and front-end developer. I have over 3 years of experience in the field of web design and development.</p>
                        <p>I have worked on a variety of projects, from corporate portfolios to personal blogs and landing pages.</p>
                        <img src={signature} alt="signature" className={styles.Signature}/>
                    </div>
                </div>
                <div className={styles.Project}>
                    <h1>Need a Project?</h1>
                    <p>Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful.</p>
                    <MyButton>Let's Talk</MyButton>
                </div>
            </div>
        </>
    );
}

export default History;