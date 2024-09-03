//PAGINA DE EIÇÃO DO PROJETO

import styles from './Edit.module.css'
import {parse, v4 as uuidv4} from 'uuid'
import ServiceForm from '../layout/form/ServiceForm'
import Form from "../layout/form/Form"
import ServiceCard from '../layout/ServiceCard'
import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"


function Edit() {
    const { id } = useParams() //RESGATAR ID DA PAGINA 
    const [project, setProject] = useState([])
    const [showProject, setShowProject] = useState(false)
    const [showService, setShowService] = useState(false)

    //REQUISIÇÃOM PARA OBTER O PROJETO PARA A EDIÇÃO 
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET', //INDICAR QUE VAI "PEGAR O PROJETO"
            headers: {
                'content-type': 'aplication/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log(err))
    }, [id])

    //FUNÇÃO PARA ATUALIZAÇÃO DO MEU FORMULARIO DE EDIÇÃO DO PROJETO
    function postUpdate(projectt) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'aplication/json'
            },
            body: JSON.stringify(projectt),
        })
            .then((resp) => resp.json())
            .then((data) => setProject(data))
            .catch((err) => console.log(err))
    }

    //FUNÇÃO PARA EXIBIR OUO NAO O FORMULARIO DE EDIÇÃO 
    const clickEdit = () => {

        if (showProject === false) {
            setShowProject(true)
        }
        else {
            setShowProject(false)
        }
    }

    //FUNÇÃO PARA EXIBIR O FORMULARIO 3DE ADIÇÃO DO PROJETO
    const clickService = () => {
        setShowService(!showService)
    }

    //CRIÇÃO DO PROJETO
    function createService(projectService) {

        const lastService  = project.service[projectService.service.length -1] //pega o ultimo serviço
        
        lastService.id = uuidv4() //GERAR ID PARA O SERVIÇO ADCIONADO

        const lastServiceCost = lastService.cost //PEGANDO O VALOR(COST) DO SERVIÇO

        
        const newCost = parseFloat(projectService.cost) + parseFloat(lastServiceCost) 
        
        //ATUALIZAÇÃO DO COST(VALOR UTILIZADO) DO PRJETO
        projectService.cost = newCost
        
        //CONDIÇÃO PARA ADICIONAR O SERVIÇO AO PROJETO
        if (projectService.cost <= projectService.budget) {

            fetch(`http://localhost:5000/projects/${projectService.id}`, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(projectService)
            })
                .then((resp) => resp.json())
                .then((data) =>{
                    setProject(data)
                    window.location.reload()
                }) 
                .catch((err) => console.log(err))
        }

        else{
            window.alert('erro de dinheiro')
            window.location.reload()
        }

    }

    // ATUALIZAÇÃO PARA BANCOS DE DADOS DO SERVIÇO REMOVIDO
    function removeService(proje){
        
        
        fetch(`http://localhost:5000/projects/${proje.id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(proje)
        })
            .then((resp) => resp.json())
            .then((data) =>{
                setProject(data)
            }) 
            .catch((err) => console.log(err))

    }


    return (
        <div className={styles.container}>

            <div className={styles.init}>
                <h1>Projeto: {project.name}</h1>
                <button onClick={clickEdit}>{!showProject ? 'Editar Projeto' : 'Fechar'}</button>
            </div>
            {!showProject ? (
                <div className={styles.infoEdit}>
                    <p><span>Categoria:</span> {project.category ? project.category.name : ''} </p>
                    <p><span>Total do orçamento:</span> R${project.budget}</p>
                    <p><span>Total Utiluzado:</span> R${project.cost}</p>
                </div>
            ) : (
                <div>
                    <Form handleSubmit={postUpdate} btnText='Atualizar' projectData={project} />
                </div>
            )}

            <div className={styles.init}>
                <h2>Adicione um Serviço:</h2>
                <button onClick={clickService}>{!showService ? 'Adicionar Serviço' : 'Fechar'}</button>
            </div>
            <div className={styles.form}>
                {!showService ? '' : (
                    <div >
                        <ServiceForm
                            textBtn='Adcionar Serviço'
                            dataProject={project}
                            handleService={createService}
                        />
                    </div>
                )}
            </div>
            <div className={styles.cardService}>
                <h3>Serviços:</h3>
                <div>
                    <ServiceCard baseProject={project} remove={removeService}/>
                </div>
            </div>
        </div>
    )
}

export default Edit