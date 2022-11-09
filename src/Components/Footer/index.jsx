import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/LOGO_footer.png'

const FooterContent = styled.div`height:68px; 
                                 display:flex; 
                                 flex-direction:column; 
                                 width:100%; 
                                 justify-content: space-between;
                                 background-color:black`
const FooterLogo = styled.div ``
const FooterText = styled.div `color:#FFFFFF`

function Footer(){
    return (
        <FooterContent>
          <FooterLogo><img src={Logo} /></FooterLogo>
          <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterContent>
      )
}

export default Footer