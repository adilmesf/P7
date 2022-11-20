import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
import styled from 'styled-components'

const Cardmain = styled.div`
  background: rgb(255,96,96);
  border-radius: 10px;
  width:340px;
  height:340px;
  display:flex;
  flex-direction:column;
  overflow: hidden;
  margin-top: 20px;    
  background-image: url(${props => props.img});
  justify-content:flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    height:255px;
    width:335px;
  }
`
function Card({ title,img, id }) {
    return (
      <Link to={`/Logement/${id}`} params={{ id }} className={styles.cardLink}>
        <Cardmain key={id} img={img}>
            <span className={styles.cardTitle} key={`titre-${id}`}> {title} </span>
        </Cardmain>
      </Link>
    )
  }
  
  export default Card

  /* <img src={img} alt="logement" className={styles.imageCover}/> 
  <div className={styles.cardMain} key={id}>
  <span className={styles.cardTitle} key={`titre-${id}`}> {title} </span>
</div>*/