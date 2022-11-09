import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/LOGO.png'
const HeaderContent = styled.div`height:68px; 
                                 display:flex; 
                                 flex-direction:row; 
                                 width:100%; 
                                 justify-content: space-between`
const HeaderLogo = styled.div ``
const HeaderNav = styled.nav `display: flex;
                              align-items: center;
                              width: 30%;
                              justify-content: space-around;`
const HeaderLinks = styled.ul `list-style-type: none;
                               display: flex;`
const HeaderLi    = styled(Link) `color:#FF6060;`
function Header() {
    return (
      <HeaderContent>
        <HeaderLogo><img src={Logo} /></HeaderLogo>
        <HeaderNav>
            <HeaderLi to="/">Accueil</HeaderLi>
            <HeaderLi to="/">A Propos</HeaderLi>
        </HeaderNav>
      </HeaderContent>
    )
  }
  
  export default Header