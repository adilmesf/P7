import '../../App.css';
import styled from 'styled-components'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Data from '../../Data/logements.json'
import { useParams } from 'react-router-dom'
import Tag from '../../Components/Tag'
import Equipment from '../../Components/DropDown'
import Description from '../../Components/DropDown'
import Rating from '../../Components/Rating';

const TagMain = styled.div`
    display:flex;
`
const EquipmentMain = styled.div`
    display:flex;
`
const DescriptionMain = styled.div`
    display:flex;
`
const ZoneDescription = styled.div`
  display:flex;
  flex-direction:row;
`
function Logement() {

  const { id } = useParams()


  return (
    <div className="App">
        <Header />
          <TagMain>
            {Data.map((logement, index) => (
              logement.id === id ?
                (<Tag key={index} tag={logement.tags} id={logement.id} />)
              :null
            ))}
          </TagMain>
          
          {Data.map((logement, index) => (
                logement.id === id ?
                  (<Rating nb={logement.rating} key={index}  />)
                :null
              ))}

          <ZoneDescription>
            <DescriptionMain>
            {Data.map((logement, index) => (
                logement.id === id ?
                  (<Description key={`${index}`-1} titre="Description" data={logement.description}  />)
                :null
              ))}
            </DescriptionMain>
            <EquipmentMain>
            {Data.map((logement, index) => (
                logement.id === id ?
                  (<Equipment key={`${index}`-2} titre="Equipements" data={logement.equipments}  />)
                :null
              ))}
            </EquipmentMain>
          </ZoneDescription>
        <Footer />
    </div>
  );
}

export default Logement;
