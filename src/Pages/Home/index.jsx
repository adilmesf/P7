import '../../App.css';
import Card from '../../Components/Cards';
import Data from '../../Data/logements.json'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import styles from './style.module.css'
import imgAccueil from '../../Assets/IMG_accueil.png'

function App() {
  return (
    <div className="App">
        <Header />
        <div className={styles.imgAccueil}>
          <img src={imgAccueil} alt="Kasa accueil" className={styles.img} />
          <span className={styles.txtAccueil}>Chez vous, partout et ailleurs</span>
        </div>
        <div className={styles.mainCard}>
          <div className={styles.cards}>
            {Data.map((logement) => (
              <Card key={logement.id} title={logement.title} img={logement.cover} id={logement.id} />
            ))}
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
