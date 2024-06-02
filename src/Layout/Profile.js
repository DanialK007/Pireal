import { Background, Parallax } from 'react-parallax';
import styles from './Profile.module.css';
import Bg from './img/MyProfile.png';

function Profile() {
    return(
        <>
            <Parallax strength={200} className={styles.Profile}>
                <Background>
                    <img src={Bg} className={styles.ProfileBg} />
                </Background>
                <div className={styles.ProfileCap}>
                    <h1>Kaung Khant Kyaw</h1>
                    <p>I am a Frontend Developer based in Mandalay, specializing <br/>
in User Interface Design and Development.</p>
                </div>
            </Parallax>
        </>
    )
}

export default Profile;