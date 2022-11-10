import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import StarG from '../../Assets/Star-Grey.svg'
import StarO from '../../Assets/Star-Orange.svg'


function Rating({ nb }) {
    var elementAafficher = [];
    console.log(nb)
    for (let i = 1; i <= 5 ; i++){
        if (i <= nb){
            elementAafficher.push(<img src={StarO} />)
        } else {
            elementAafficher.push(<img src={StarG} />)
        }
    }
    return (
        <div>
            {elementAafficher}
        </div>
    )
}

export default Rating
