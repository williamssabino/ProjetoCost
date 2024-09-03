import { useState, useEffect } from 'react'
import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'

function ProjectCard({ baseProjects, remove }) {

    return (
        <div className={styles.container}>
            {baseProjects.length > 0 &&
                baseProjects.map((proje) => (
                    <div className={styles.cards}>
                        <h2>{proje.name.toUpperCase()}</h2>
                        <p><span>Orçamento:</span> {` R$${proje.budget}`}</p>
                        <p className={styles.ball}>
                            <span style={{ backgroundColor: proje.category.color }}></span>{proje.category.name}
                        </p>
                        <div className={styles.button}>
                            <Link to={`/edit/${proje.id}`}>Editar</Link>
                            <button id={proje.id} value={proje.id} onClick={remove}>Remover</button>
                        </div>
                    </div>
                ))}  
        </div>

    )
}


export default ProjectCard