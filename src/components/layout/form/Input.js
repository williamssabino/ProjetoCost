import styles from './Input.module.css'
function Input(props){
    return(
        <div className={styles.inputContainer}>
            <label htmlFor={props.name}>{props.text}</label>
            <input
                type={props.type}
                name = {props.name}
                id={props.name}
                placeholder={props.placeholder}
                onChange={props.handleOnChange} // função do input a ser executada
                value={props.value}
                autoComplete='off'
            ></input>
        </div>
    )
}
export default Input