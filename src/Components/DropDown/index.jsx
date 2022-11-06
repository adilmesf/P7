import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
const DropdownTitle = styled.div`
    background: rgb(255,96,96);
    border-radius: 10px;
    width:auto;
    height:auto;
    color:white;
    padding-left:10px;
    padding-right:10px;
    margin-right:20px;
    width:582px;
    height:52px;
`
const DropDownContent = styled.div`
                        width:582px;
                        height:auto;
`
const DropDownMain = styled.div `display:flex; 
                               flex-direction:column;`

function Tag({ title }) {
    const [ouvert, setOuvert] = useState(false)
        return (
            <DropDownMain>
                <DropdownTitle>
                    <span>Equipement</span> 
                    <FontAwesomeIcon icon={faChevronDown} onClick={() => setOuvert(true)}/>
                </DropdownTitle>
                {title.map((Tag) => (
                    <DropDownContent>{Tag}</DropDownContent>
                ))}
            </DropDownMain>

        )
        
                }
  export default Tag