import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/LOGO.png'
import Logo_small from '../../Assets/LOGO_small.png'
import styles from './style.module.css'

function Header() {
    return (
      <div className={styles.headerContent}>
        <div>
          <img src={Logo} alt="logo Kasa"
             srcSet={`${Logo_small} 768w, ${Logo} 1280w`}
             sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px"
          />
        </div>
        <nav>
            <Link to="/"        className={styles.link}>Accueil</Link>
            <Link to="/APropos" className={styles.link}>A Propos</Link>
        </nav>
      </div>
    )
  }
  
  export default Header