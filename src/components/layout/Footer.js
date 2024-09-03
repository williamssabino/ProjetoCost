import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


function Footer() {
    return (

        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <section className={styles.section}>
                <p>COST</p>
                <p>2024</p>
            </section>
        </footer>

    )
}

export default Footer