import React from 'react';
import styles from './LoadingScreen.module.css';
import Ball from '../img/bouncing-ball.svg';

const LoadingScreen = () => {
  return (
    <div className={styles.LoadingScreen}>
      {/* <div className={styles.spinner}></div> */}
      <img src={Ball} className={styles.ball} alt="ball" />
    </div>
  );
};

export default LoadingScreen;