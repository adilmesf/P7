import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import styles from './style.module.css'

function Tag({ titre, data}) {
    
    let elementAAfficher = ""
    const [ouvert, setOuvert] = useState(false)

    elementAAfficher = <p className={styles.textDropDown}>{data}</p>

        return ouvert ? 
        (
            <div id={titre}>
                <div className={styles.DropdownTitle}>
                    <span className={styles.DropdownTitre}>{titre}</span> 
                    <FontAwesomeIcon icon={faChevronUp} onClick={() => setOuvert(false)} className={styles.down}/>
                </div>
                <div className={styles.DropDownContentOpen}>
                    {elementAAfficher}
                </div>
            </div>
        ) : (
            <div id={titre}>
                <div className={styles.DropdownTitle}>
                    <span className={styles.DropdownTitre}>{titre}</span> 
                    <FontAwesomeIcon icon={faChevronDown} onClick={() => setOuvert(true)} className={styles.up}/>
                </div>
                <div className={styles.DropDownContentClosed}>
                    {elementAAfficher}
                </div>
            </div>            
        )
        
    }
  export default Tag

  