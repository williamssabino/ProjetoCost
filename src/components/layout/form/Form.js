import Input from "./Input"
import styles from './Form.module.css'
import Select from "./Select"
import SubmitButton from "./SubmitButton"
import { useEffect, useState } from "react"

function Form(props) {
    //STATE PARA OBTENÇAO DAS CATEGORIAS PRESENE NO BANCO DE DADOS
    const [category, setCategory] = useState([])
    //STATE PARA GUARDAR O PROJETO CRIADO
    const [projects, setProjects] = useState(props.projectData || {})

    //REQEUISIÇAO PARA OBTENÇÃO DAS CATEGORIAS DO BANCO DE DADOS
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'content-type': 'aplication/json'
            },
        })
            .then((resp) => resp.json())
           
            //ADICIONANDO AS CATEGORIAS AO STATE
            .then((data) => setCategory(data))
            .catch((err) => console.log(err))
    }, [])

    //ENVIO DO FORMULARIO AO BANCO DE DADOS APOS APETAR O BOTÃO DE ENVIAR
    const submit = (e) => {
        e.preventDefault()

        //PASSANDO O PROJETO CRIADO PARA A FUNÇAO QUE CRIARA O PROJETO E ENVIARA PARA O BANCO DE DADOS
        //ATRAVES DA PROPS 'HANDLSUBMIT' QUE TEM COMO PARAMETRO A FUNÇÃO 'CREATPOST'
        props.handleSubmit(projects)
    }

    //OBTEM OS DADOS DIGITADOS PELO USUARIO NA PAGINA DE FORMULARIO DE CRAIÇÃO DO PROJETO
    const handleChange = (e) => {
        //ADICIONA O AO PROJETO O NOME E O VALOR DIGITADO NO FORMULARIO
        setProjects({ ...projects, [e.target.name]: e.target.value })
    }

    //OBETEM A CATEGORIA SELECIONADA PELO USUARIO 
    const handleCategory = (e) => {
        let color = ''

        
        if (e.target.value === '1') {
            color = "#ffaebc"
        }
        else if (e.target.value ==='2') {
            color = "#a0e7e5"
        }
        else if (e.target.value === '3') {
            color = "#b4f8c8"
        }
        else {
            color = "#fbe7cc"
        }

        //ADICIONA A CATEGORIA ESCLHIDA DO USUARIO AO PROJETO ATUAL CRIADO
        setProjects({
            ...projects, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
                color: color
            },
        })
    }


    return (

        //CRIAÇÃO DO FORMULARIO DO PROJETO
        <form method="POST" onSubmit={submit} className={styles.formContainer}>
            <Input
                text='Nome do projeto:'
                type='text'
                name='name'
                placeholder='insira o nome do projeto'
                handleOnChange={handleChange}
                value={projects.name ? projects.name : ''}
            />

            <Input
                text='Orçamento do Projeto:'
                type='number'
                name='budget'
                placeholder='insira o orçamento total'
                handleOnChange={handleChange}
                value={projects.budget ? projects.budget : ''}
            />
           
            {/* COMPONENTE DE OPÇOES DAS CATEGORIAS DO PROJETO */}
            <Select
                text='Selecione a categoria:'
                name='id_category'
                options={category}
                handleOnCategory={handleCategory}
                value={projects.category ? projects.category.id : ''}
            />
            
            {/* BOTAO DE ENVIO DO FORMULARIO DO PROJETO */}
            <SubmitButton textbt={props.btnText} />
        </form>
    )
}


export default Form