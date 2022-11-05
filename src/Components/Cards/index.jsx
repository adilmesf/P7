import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    background: rgb(255,96,96);
    background: linear-gradient(180deg, rgba(255, 96, 96, 1) 0%, rgba(0, 0, 0, 0.5) 100%);
    border-radius: 10px;
    width:340px;
    height:340px;
    margin-bottom:20px;
    display:flex;
    align-items:flex-end;
`
const CardTitle = styled.div`color:white;`

function Card({ title }) {
    console.log({title})
    return (
    
      <CardWrapper>
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    )
  }
  
  export default Card