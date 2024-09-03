import { useEffect, useState } from "react"
import ProjectCard from '../layout/ProjectCard'
import RouterButton from "../layout/RouterButton"
import styles from './Projects.module.css'

function Projects() {
    //STATE CRIADO PARA GAURDA O PROJETO RESGATADO DO BANCO DE DADOS
    const [Projects, setProjects] = useState([])

    //RESGATE DO PROJETO DO BANCO DE DADOS
    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'content-type': 'aplication/json'
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setProjects(data)
            })
            .catch((err) => console.log(err))
    })


    //REMOÇÃO DO PROJETO DO BANCO DE DADOS APOS APERTAR O BOTÃO
    const handleRemove = (e) => {
        e.preventDefault()
        
        //DELETANDO O PROJETO DO BANCO DE DADOS ATRVES DO ID DO MESMO  
        fetch(`http://localhost:5000/projects/${e.target.value}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'aplication/json'
            },
        })
            .then((res) => res.json())
            .catch((err) => console.log(err))
       
   }

    return (
        <div className={styles.container}>
            <div className={styles.start}>
                <h1>Meus Projetos</h1>
                <RouterButton to='/NewProject' text='Criar Projeto'></RouterButton>
            </div>
            <ProjectCard baseProjects={Projects} remove={handleRemove} />

        </div>
    )

}

export default Projects