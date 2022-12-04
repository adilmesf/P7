import '../../App.css';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Fiabilite from '../../Components/DropDown'
import Respect from '../../Components/DropDown'
import Service from '../../Components/DropDown'
import Securite from '../../Components/DropDown'
import styles from './style.module.css'
import imgApropos from '../../Assets/IMG_apropos.png'

function APropos() {
    
    //Textes
    var fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    var respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    var service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    var securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    
    document.title = "KASA - Location immobilière - A Propos";

    return (
    <div className="App">
        
        <Header />
        <div className={styles.imgAPropos}>
          <img src={imgApropos} alt="Kasa accueil" className={styles.img} />
        </div>
        <div className={styles.elementAproposMain}>
            <div className={styles.elementApropos}>
                <Fiabilite  key="Fiabilite" titre="Fiabilité" data={fiabilite} size={"big"} />
            </div>
            <div className={styles.elementApropos}>
                <Respect    key="Respect" titre="Respect" data={respect} size={"big"} />
            </div>
            <div className={styles.elementApropos}>
                <Service    key="Service" titre="Service" data={service} size={"big"} />
            </div>
            <div className={styles.elementApropos}>
                <Securite   key="Securite" titre="Securité" data={securite} size={"big"} />
            </div>
        </div>
        <Footer />
        
    </div>
    )
}

export default APropos;