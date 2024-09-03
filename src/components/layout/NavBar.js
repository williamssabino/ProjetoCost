import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to='/'>
        <img src={logo} alt="imghome"></img>
      </Link>
      <ul className={styles.list}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contatos'>Contatos</Link></li>
        <li><Link to='/empresa'>Empresa</Link></li>
        <li><Link to='/projects'>Projetos</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar