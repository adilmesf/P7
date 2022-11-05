import styled from 'styled-components'
const CardMain = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    color:#FF6060;
    margin:0;
`
function Error() {
  return (
    <CardMain>
       <div>404</div>
       <br />
       <div>Oups! La page que vous demandez n'existe pas.</div>
       <div>Retourner à la page d'accueil</div>
    </CardMain>
  );
}

export default Error;