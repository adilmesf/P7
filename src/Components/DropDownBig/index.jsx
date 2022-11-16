import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const DropdownTitle = styled.div`
    background: rgb(255,96,96);
    border-radius: 10px;
    color:white;
    margin-right:20px;
    width:100%;
    height:35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:10px;
    padding-rigth:10px;
    font-size:24px;
}
`
const DropDownContentOpen = styled.div`
                        width:100%;
                        height:auto;
                        background-color:#F7F7F7;
                        display:flex;
                        flex-direction:column;
                        font-size:24px;
                        color:#FF6060;
                        text-align:left;
                        padding-top:20px;
                        padding-bottom:10px;
                        padding-left:10px;
                        padding-rigth:10px;
`
const DropDownContentClosed = styled.div`
                        width:100%;
                        visibility:hidden;
                        display:none;
                        height:0px;
                        background-color:#F7F7F7;
                        display:flex;
                        flex-direction:column;
                        font-size:24px;
                        color:#FF6060;
                        text-align:left;
`

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
                
                <DropdownTitle>
                    <span>{titre}</span> 
                    <FontAwesomeIcon icon={faChevronUp} onClick={() => setOuvert(false)}/>
                </DropdownTitle>
                <DropDownContentOpen>
                    {elementAafficher}
                </DropDownContentOpen>
            </div>
        ) : (
            <div id={titre}>
                <DropdownTitle>
                    <span>{titre}</span> 
                    <FontAwesomeIcon icon={faChevronDown} onClick={() => setOuvert(true)}/>
                </DropdownTitle>
                <DropDownContentClosed>
                    {elementAafficher}
                </DropDownContentClosed>
            </div>            
        )
        
    }
  export default Tag

  