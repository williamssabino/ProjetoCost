import { useState } from "react"
import Input from "./Input"
import SubmitButton from "./SubmitButton"

function ServiceForm({ textBtn, dataProject, handleService }) {
    
    const [service, setService] = useState()

    //CRIAÇÃO DO SERVIÇO ATRAVES DOS DADOS DIGITDOS PELO USUSARIO
    const handleChange = (e)=>{
        setService({...service, [e.target.name]: e.target.value})
    }
   
    //FUNÇÃO A SER EXECUTADA PELO FORMULARIO APOS O ENVIO DO MESMO
    const submit = (e) => {
        e.preventDefault()

        //ADCIONANDO O SERVIÇO A LISTA NO BACK-END
        dataProject.service.push(service)

        //OBTENDO TODO O PROJETO MODIFICADO E REPASSANDO PARA A PROPS QUE CONTEM A FUNÇÃO QUE IRA ATUALIZAR O MESMO NO BACK-END
        handleService(dataProject)
        
    }

    return (
        <div>
            <form onSubmit={submit}>
                <Input
                    type='text'
                    name='name'
                    text='Nome do Serviço'
                    placeholder='Insira o nome do serviço'
                    handleOnChange={handleChange}
                    // value={service? service.name : ''}
                />
                <Input
                    type='number'
                    name='cost'
                    text='Custo do Serviço'
                    placeholder='Insira o valor total'
                    handleOnChange={handleChange}
                    // value={service ? service.cost : ''}
                />
                <Input
                    type='text'
                    name='descrition'
                    text='Descrição do Serviço'
                    placeholder='Descreva o Serviço'
                    handleOnChange={handleChange}
                    // value={service ? service.descrition : ''}
                />
                <SubmitButton textbt={textBtn} />
            </form>
        </div>
    )

}

export default ServiceForm