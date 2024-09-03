import { useState } from 'react'
import styles from './Select.module.css'
function Select(props){

    let color = ''
    
    return(
        <div className={styles.selectContainer}>
            <label htmlFor={props.name}>{props.text}</label>
            <select
                type={props.type}
                name = {props.name}
                id={props.name}
                onChange={props.handleOnCategory}
                value={props.value ||''}
                required
            >
                <option>Selecione a opção</option>
                {props.options.map((opt)=>(
                    <option value={opt.id} key={opt.id}>{opt.name}</option>
                ))}
            </select>
        </div>
    )
}
export default Select