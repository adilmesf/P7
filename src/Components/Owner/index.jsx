import {React } from 'react'
import styles from './style.module.css'

function Owner({ informations }) {
    return (
        <div className={styles.informationOwner}>
            <span className={styles.textOwner}>{informations.name}</span>
            <img src={informations.picture} alt="Propriétaire" className={styles.img} />
        </div>
    )
}
export default Owner