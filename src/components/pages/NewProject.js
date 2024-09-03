import styles from './NewProject.module.css'
import Form from '../layout/form/Form'
import { useNavigate } from 'react-router-dom'


function NewProject() {

    const history = useNavigate() //HOOK QUE PERMITE NAVEGAR PARA UMA DETERMINADA PAGINA

    //CRIAÇÃOA DO PROJETO PARA O ENVIAR AO BANCO DE DADOS
    function createPost(project) {
       
        project.cost = 0
        project.service = []

        //DIRECIONANDO OS PROJETOS CRIADOS AO BANCO DE DADOS
        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'content-type': 'aplication/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                history('/projects')
            })
            .catch((err) => console.log(err))
    }

    return (
        <section className={styles.nwproject}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adcionar os seus serviços</p>

            
            {/* DEFINIÇÃO DOS PARAMETROS DAS PROPS DO COMPONENTE FORM */}
            <Form handleSubmit={createPost} btnText='Criar Projeto' />
        </section>
    )



}

export default NewProject