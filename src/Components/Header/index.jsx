import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/LOGO.png'
import styles from './style.module.css'

function Header() {
    return (
      <div className={styles.headerContent}>
        <div><img src={Logo} alt="logo Kasa"/></div>
        <nav>
            <Link to="/"        className={styles.link}>Accueil</Link>
            <Link to="/APropos" className={styles.link}>A Propos</Link>
        </nav>
      </div>
    )
  }
  
  export default Header