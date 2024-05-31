import styles from './Profile.module.css';

function Profile() {
    return(
        <>
            <div className={styles.Profile}>
                <div className={styles.ProfileCap}>
                    <h1>Kaung Khant Kyaw</h1>
                    <p>I am a Frontend Developer based in Mandalay, specializing <br/>
in User Interface Design and Development.</p>
                </div>
            </div>
        </>
    )
}

export default Profile;