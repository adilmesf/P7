import React from 'react'
import styled from 'styled-components'

const TagContent = styled.div`
    background: rgb(255,96,96);
    border-radius: 10px;
    width:auto;
    height:auto;
    color:white;
    padding-left:10px;
    padding-right:10px;
    margin-right:20px;
`
const TagWrapper = styled.div `display:flex; 
                               flex-direction:row;`


function Tag({key, title}) {
        return (
            
            <TagWrapper key={key}>
                {title.map((Tag, index) => (
                    <TagContent key={`${Tag}-${index}`}>{Tag}</TagContent>
                ))}
            </TagWrapper>

        )
}
  export default Tag