import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    background: rgb(255,96,96);
    background: linear-gradient(180deg, rgba(255,96,96,1) 0%, rgba(0,0,0,1) 90%);
    border-radius: 10px;
    width:340px;
    height:340px;
    margin-bottom:20px;
    margin-right:20px;
    display:flex;
    flex-direction:column;
    overflow: hidden;
    justify-content:space-between;
`
const CardTitle = styled.div`color:white;`
const CardCover = styled.div`width:100%;`
const CardImg = styled.img` max-width:100%;
                            max-height:100%;
                            height:300px;
                            object-fit: fill;
                              ` 
function Card({ title,img }) {
    return (
      <CardWrapper>
          <CardCover><CardImg src={img} alt="logement" /></CardCover>
          <CardTitle> {title} </CardTitle>
      </CardWrapper>
    )
  }
  
  export default Card