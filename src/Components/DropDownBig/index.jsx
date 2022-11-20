import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import styles from './style.module.css'

function Tag({ titre, data}) {
    
    let elementAafficher = ""
    const [ouvert, setOuvert] = useState(false)
    if (Array.isArray(data)){
        elementAafficher = (data.map((Tag, index) => ( <span key={`${index}-${Tag}`}>{Tag}</span>  )))
    } else {
        elementAafficher = <span>{data}</span>
    }

        return ouvert ? 
        (
            <div id={titre}>
                
                <div className={styles.DropdownTitle}>
                    <span>{titre}</span> 
                    <FontAwesomeIcon icon={faChevronUp} onClick={() => setOuvert(false)} className={styles.down}/>
                </div>
                <div className={styles.DropDownContentOpen}>
                    {elementAafficher}
                </div>
            </div>
        ) : (
            <div id={titre}>
                <div className={styles.DropdownTitle}>
                    <span>{titre}</span> 
                    <FontAwesomeIcon icon={faChevronDown} onClick={() => setOuvert(true)} className={styles.up}/>
                </div>
                <div className={styles.DropDownContentClosed}>
                    {elementAafficher}
                </div>
            </div>            
        )
        
    }
  export default Tag

  