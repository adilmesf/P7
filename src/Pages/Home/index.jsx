import '../../App.css';
import Card from '../../Components/Cards';
import Tag  from '../../Components/Tag';
import DropDown  from '../../Components/DropDown';
import Data from '../../Data/logements.json'
import styled from 'styled-components'
import Header from '../../Components/Header';


const CardMain = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    padding-bottom:10px;
    border-radius: 10px;
    width:80%;
`
const TagMain = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    padding-bottom:10px;
    border-radius: 10px;
    width:80%;
`
const DropDownMain = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    padding-bottom:10px;
    border-radius: 10px;
    width:80%;
`
function App() {
  return (
    <div className="App">
        <Header />
        <CardMain>
          {Data.map((logement) => (
            <Card key={logement.id} title={logement.title} img={logement.cover} />
          ))}
        </CardMain>
    </div>
  );
}

export default App;
