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
import Carousel from '../../Components/Carousel';
import Owner from '../../Components/Owner';
import styles from './style.module.css'


function Logement() {

  const { id } = useParams()


  return (
    <div className="App">
        <Header />
          <div id="carouselMain" className={styles.carouselMain}>
          {Data.map((logement, index) => (
              logement.id === id ?
                (<Carousel key={index} img={logement.pictures} />)
              :null
            ))}
          </div>
          <div id="locationMain" className={styles.locationMain}>
            {Data.map((logement, index) => (
                  logement.id === id ?
                    (
                    <div className={styles.location}>
                      <div className={styles.informationLocation}>
                        <span key={`${index}-"titre"`} className={styles.titreLogement}>{logement.title}</span>
                        <span key={`${index}-"location"`} className={styles.locationLogement}>{logement.location}</span>
                      </div>
                      <div>
                        <Owner key={index} informations={logement.host} />
                      </div>
                    </div>
                    )
                  :null
                ))}            
          </div>
          <div id="TagMain">
            {Data.map((logement, index) => (
              logement.id === id ?
                (
                <div className={styles.TagMain}>
                  <div>
                    <Tag key={index} tag={logement.tags} id={logement.id} />
                  </div>
                  <div>
                    <Rating nb={logement.rating} key={index}  />
                  </div>
                </div>
                )
              :null
            ))}
          </div>

          <div id="ZoneDescription" className={styles.zoneDescription}>
            {Data.map((logement, index) => (
                logement.id === id ?
                  (
                  <div className={styles.elementsLogement}>
                    <div className={styles.elementsDescription}>
                      <Description key={`${index}`-1} titre="Description" data={logement.description}  />
                    </div>
                    <div className={styles.elementsEquipements}>
                      <Equipment   key={`${index}`-2} titre="Equipements" data={logement.equipments}  />
                    </div>
                  </div>
                  )
                :null
              ))}
          </div>
        <Footer />
    </div>
  );
}

export default Logement;
