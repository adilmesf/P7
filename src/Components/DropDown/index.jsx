import {useEffect, useRef, React}  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import styles from './style.module.css'

function Tag({ titre, data, size}) {
    
    let elementAAfficher = ""
    const [open, setOpen] = useState(false)

    if (Array.isArray(data)){
        elementAAfficher = (data.map((Tag, index) => ( <span key={`${index}-${Tag}`} className={styles.textDropDown}>{Tag}</span>  )))
    } else {
        elementAAfficher = <span className={styles.textDropDown}>{data}</span>
    }
    let ref      = useRef();

    useEffect(() => {
        if (open){
            if (size === "small") {
                ref.current.className = styles.DropDownContentOpen;
            } else {
                ref.current.className = styles.DropDownContentOpen + " " + styles.DropDownContentOpen_big;
            }
        } else {
            if (size === "small") {
                ref.current.className = styles.DropDownContentClosed;
            } else {
                ref.current.className = styles.DropDownContentClosed + " " + styles.DropDownContentClosed_big;
            }
        }  
    });
    return (
        <div id={titre} className={styles.DropdownMain}> 
            <div>
                <div className={styles.DropdownTitle}>
                    <span className={styles.DropdownTitre}>{titre}</span> 
                    <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} onClick={() => open ? setOpen(false) : setOpen(true)} className={styles.down}/>
                </div>
                <div className={styles.DropDownContentOpen} ref={ref}>
                    {elementAAfficher}
                </div>   
            </div>
        </div>
    )
        /*
        return open ?
        (
            <div id={titre} className={styles.DropdownMain}> 
                {size === "small" ? (
                    <div>
                        <div className={styles.DropdownTitle}>
                            <span className={styles.DropdownTitre}>{titre}</span> 
                            <FontAwesomeIcon icon={faChevronUp} onClick={() => setOpen(false)} className={styles.down}/>
                        </div>
                        <div className={styles.DropDownContentOpen} ref={ref}>
                            {elementAAfficher}
                        </div>   
                    </div>
                    ) : (
                    <div>
                        <div className={`${styles.DropdownTitle} ${styles.DropdownTitle_big}` }>
                            <span className={styles.DropdownTitre}>{titre}</span> 
                            <FontAwesomeIcon icon={faChevronUp} onClick={() => setOpen(false)} className={styles.down}/>
                        </div>
                        <div className={`${styles.DropDownContentOpen}  ${styles.DropDownContentOpen_big}`}>
                            {elementAAfficher}
                        </div>   
                    </div>
                    )
                }

            </div>
        ) : (
            <div id={titre}  className={styles.DropdownMain}>
                {size === "small" ? (
                    <div>
                        <div className={styles.DropdownTitle}>
                            <span className={styles.DropdownTitre}>{titre}</span> 
                            <FontAwesomeIcon icon={faChevronDown} onClick={() => setOpen(true)} className={styles.down}/>
                        </div>
                        <div className={styles.DropDownContentClosed}>
                            {elementAAfficher}
                        </div>
                    </div>
                    ) : (
                    <div>
                        <div className={`${styles.DropdownTitle} ${styles.DropdownTitle_big}`}>
                            <span className={styles.DropdownTitre}>{titre}</span> 
                            <FontAwesomeIcon icon={faChevronDown} onClick={() => setOpen(true)} className={styles.down}/>
                        </div>
                        <div className={`${styles.DropDownContentClosed} ${styles.DropDownContentClosed_big}`}>
                            {elementAAfficher}
                        </div>
                    </div>
                    )
                }

            </div>            
        )*/
        
    }
  export default Tag

  