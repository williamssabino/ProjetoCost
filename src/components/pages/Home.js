import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import RouterButton from '../layout/RouterButton'

function Home() {
    return (
        <section className={styles.sectionContainer}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>comece a gerenciar seus projetos agora mesmo </p>
            <RouterButton to='/NewProject' text='Criar Projeto'></RouterButton>
            <img src={savings} alt='costs'></img>
        </section>
    )

}

export default Home