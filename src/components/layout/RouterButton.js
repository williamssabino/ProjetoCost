import {Link} from 'react-router-dom'
import styles from './RouterButton.module.css'

function RouterButton(props){
    return(
        <div className={styles.router}>
            <Link to={props.to}>{props.text}</Link>
        </div>
    )
}
export default RouterButton

