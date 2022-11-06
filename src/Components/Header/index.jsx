import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContent = styled.div`height:68px;`
const HeaderLogo = styled.div ``
const HeaderNav = styled.nav ``
const HeaderLinks = styled.ul `list-style-type: none;
                               display: flex;`
const HeaderLi    = styled(Link) `color:#FF6060;`
function Header() {
    return (
      <HeaderContent>
        <HeaderLogo></HeaderLogo>
        <HeaderNav>
            <HeaderLi to="/">Accueil</HeaderLi>
            <HeaderLi to="/">A Propos</HeaderLi>
        </HeaderNav>
      </HeaderContent>
    )
  }
  
  export default Header