import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/LOGO_footer.png'

const FooterContent = styled.div`height:209px; 
                                 display:flex; 
                                 flex-direction:column; 
                                 width:100%; 
                                 background-color:black`
const FooterLogo = styled.div `padding-top:60px;`
const FooterText = styled.div `color:#FFFFFF;
                              font-size:24px;
                              padding-top:40px;`

function Footer(){
    return (
        <FooterContent>
          <FooterLogo><img src={Logo} /></FooterLogo>
          <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterContent>
      )
}

export default Footer