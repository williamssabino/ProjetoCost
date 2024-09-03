import styles from './SubmitButton.module.css'
function SubmitButton(props){
    return(
        <div className={styles.btn}>
            <button>{props.textbt}</button>
        </div>
    )
}
export default SubmitButton