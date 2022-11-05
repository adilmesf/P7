import '../../App.css';
import Card from '../../Components/Cards';
import Data from '../../Data/logements.json'
import styled from 'styled-components'
const CardMain = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    padding-bottom:10px;
    border-radius: 10px;
    width:80%;
`
function App() {
  return (
    <div className="App">
      <header>
        <CardMain>
          {Data.map((logement) => (
            <Card key={logement.id} title={logement.title} />
          ))}
        </CardMain>

      </header>
    </div>
  );
}

export default App;
