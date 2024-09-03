import styles from './ServiceCard.module.css'

function ServiceCard({ baseProject, remove }) {

    //função obtenção do id do serviço
    function obtID(e) {
        e.preventDefault()
       
        //SERVIÇOS ATAUAIS DO PROJETO
        const service = baseProject.service

        //Removendo o valor do serviço removido do Cost do projeto(total utilizado)
        const serviceRemove = service.filter((service)=>service.id === e.target.value)
        const costN = baseProject.cost
        const costNew = parseFloat(costN) - parseFloat(serviceRemove[0].cost)
        baseProject.cost = costNew

        //Retirando o serviço excluido  
        const newService = service.filter((service) => service.id !== e.target.value)
        baseProject.service = newService
        
        //Passando o projeto atulizado a função apos a remoção so serviço excluido 
        remove(baseProject)
    }

    return (
        <div>
            {baseProject.service ? (
                <div className={styles.container}>
                    {baseProject.service.length > 0 && baseProject.service.map((service) => (
                        <div className={styles.cards}>
                            <div key={service.id}>
                                <h2>{service.name}</h2>
                                <p><span>Custo Total:</span> R${service.cost}</p>
                                <p>{service.descrition}</p>
                            </div>
                            <div>
                                <button id={service.id} value={service.id} onClick={obtID}>Excuir</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : ''}

        </div>
    )
}
export default ServiceCard