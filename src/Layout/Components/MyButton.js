import styles from './MyButton.module.css';

function MyButton(props) {
    return (
        <button className={styles.MyButton}>
            {props.children}
        </button>
    );
}

export default MyButton;