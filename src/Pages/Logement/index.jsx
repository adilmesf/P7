import '../../App.css';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Data from '../../Data/logements.json'
import { useParams, useNavigate  } from 'react-router-dom'
import Tag from '../../Components/Tag'
import Equipment from '../../Components/DropDown'
import Description from '../../Components/DropDown'
import Rating from '../../Components/Rating';
import Carousel from '../../Components/Carousel';
import Owner from '../../Components/Owner';
import styles from './style.module.css'
import {useEffect} from 'react'

function Logement() {

  const { id } = useParams()
  const navigate = useNavigate();
  document.title = "KASA - Location immobilière - Logement";
  /* redirection si la référence saisie est fausse */
  useEffect(() => {
    const index = Data.findIndex(object => {
      return object.id === id;
    });
    if (index === -1){
      navigate("../Error")
    }
    
  });

  return (
    <div className="App">
        <Header />
        
        <div className={styles.logementMain}>
          {/* Carousel */}
          <div id="carouselMain" className={styles.carouselMain}>
          {Data.map((logement, index) => (
              logement.id === id ?
                (<Carousel key={index} img={logement.pictures} />)
              :null
            ))}
          </div>

          <div className={styles.InfoMain}>
            <div id="locationMain" className={styles.locationMain}>
              {Data.map((logement, index) => (
                    logement.id === id ?
                      (
                      <div className={styles.location} key={`location-${index}`}>
                        <div className={styles.informationLocation} key={`informationlocation-${index}`}>
                          <span key={`${index}-"titre"`} className={styles.titreLogement}>{logement.title}</span>
                          <span key={`${index}-"location"`} className={styles.locationLogement}>{logement.location}</span>
                        </div>
                        <div key={`detail-${index}`}>
                          <Tag key={index} tag={logement.tags} id={logement.id} />
                        </div>
                      </div>
                      )
                    :null
                  ))}            
            </div>

            <div id="TagMain" className={styles.TagPrincipal}>
              {Data.map((logement, index) => (
                logement.id === id ?
                  (
                  <div className={styles.TagMain} key={`TagMain-${index}`}>
                    <div key={`host-${index}`}>
                          <Owner key={index} informations={logement.host} />
                        </div>
                    <div key={`rating-${index}`} className={styles.ratingMain}>
                      <Rating nb={logement.rating} key={index}  />
                    </div>
                  </div>
                  )
                :null
              ))}
            </div>
          </div>

          <div id="ZoneDescription" className={styles.zoneDescription}>
            {Data.map((logement, index) => (
                logement.id === id ?
                  (
                  <div className={styles.elementsLogement} key={`elementsLogement-${index}`}>
                    <div className={styles.elementsDescription} key={`elementsDescription-${index}`}>
                      <Description key={`${index}`-1} titre="Description" data={logement.description} size={"small"}  />
                    </div>
                    <div className={styles.elementsEquipements} key={`elementsEquipement-${index}`}>
                      <Equipment   key={`${index}`-2} titre="Equipements" data={logement.equipments} size={"small"} />
                    </div>
                  </div>
                  )
                :null
              ))}
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Logement;
