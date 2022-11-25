import React from 'react'
import StarG from '../../Assets/Star-Grey.svg'
import StarO from '../../Assets/Star-Orange.svg'
import StarGSmall from '../../Assets/Star_grey_small.svg'
import StarOSmall from '../../Assets/Star_orange_small.svg'
import styles from './style.module.css'

function Rating({ nb }) {
    var elementAafficher = [];
    for (let i = 1; i <= 5 ; i++){
        if (i <= nb){
            elementAafficher.push(<img src={StarO} alt="Kasa Notation" key={i} 
                                srcSet={`${StarOSmall} 768w, ${StarO} 1280w`}
                                sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px"            
                                className={styles.image}/>)
        } else {
            elementAafficher.push(<img src={StarG} alt="Kasa Notation" key={i} 
            srcSet={`${StarGSmall} 768w, ${StarG} 1280w`}
            sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px"   
            className={styles.image} />)
        }
    }
    return (
        <div>
            {elementAafficher}
        </div>
    )
}

export default Rating
