import styled from 'styled-components'
import Header from '../../Components/Header';
const CardMain = styled.div`
    display:flex;
    flex-direction:column;
    width:80%;
    color:#FF6060;
    margin:0;
`
function Error() {
  return (
    <div className="App">
      <Header />
      <CardMain>
        <div>404</div>
        <br />
        <div>Oups! La page que vous demandez n'existe pas.</div>
        <div>Retourner à la page d'accueil</div>
      </CardMain>
    </div>
  );
}

export default Error;