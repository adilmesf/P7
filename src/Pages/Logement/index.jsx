import '../../App.css';
import styled from 'styled-components'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { useParams } from 'react-router-dom'

const CardMain = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    padding-bottom:10px;
    border-radius: 10px;
    width:80%;
    background-color:#F7F7F7;
`

function Logement() {

  const { id } = useParams()

  return (
    <div className="App">
        <Header />
        {id}
        <Footer />
    </div>
  );
}

export default Logement;
