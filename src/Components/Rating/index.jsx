import React from 'react'
import StarG from '../../Assets/Star-Grey.svg'
import StarO from '../../Assets/Star-Orange.svg'

function Rating({ nb }) {
    var elementAafficher = [];
    for (let i = 1; i <= 5 ; i++){
        if (i <= nb){
            elementAafficher.push(<img src={StarO} alt="Kasa Notation" key={i} />)
        } else {
            elementAafficher.push(<img src={StarG} alt="Kasa Notation" key={i} />)
        }
    }
    return (
        <div>
            {elementAafficher}
        </div>
    )
}

export default Rating
