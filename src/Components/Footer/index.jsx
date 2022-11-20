import React from 'react'
import Logo from '../../Assets/LOGO_footer.png'
import LogoSmall from '../../Assets/LOGO_footer_small.png'
import styles from './style.module.css'


function Footer(){
    return (
        <div className={styles.FooterContent}>
          <div className={styles.FooterLogo} >          
          <img src={Logo} alt="logo Kasa"
             srcSet={`${LogoSmall} 768w, ${Logo} 1280w`}
             sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px"
             /></div>
          <div className={styles.FooterText}>© 2020 Kasa. All rights reserved</div>
        </div>
      )
}

export default Footer