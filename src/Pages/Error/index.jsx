import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom'
import styles from './style.module.css'

function Error() {
  return (
    <div className="App">
      <Header />
      <div id="errorMain" className={styles.errorMain}>
        <div className={styles.errorNumber}>404</div>
        <div className={styles.errorText}>Oups! La page que vous demandez n'existe pas.</div>
        <div className={styles.errorEnd}><Link to="/" className={styles.errorLink}>Retourner à la page d'accueil</Link></div>
      </div>
      <Footer />
    </div>
  );
}

export default Error;