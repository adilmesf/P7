import {React, useState, useRef, useEffect} from 'react'
import ChevronUp from "../../Assets/ChevronUp.svg"
import ChevronDown from "../../Assets/ChevronDown.svg"
import styles from './style.module.css';

function Carousel({ img }) {
    const [count, setCount] = useState(0);

    let ref      = useRef();
    let compteur = useRef();

    useEffect(() => {
        
        if (count > img.length - 1){
            setCount(0)
        } else {
            if (count < 0){
                setCount(img.length - 1)
            }
        }
        ref.current.src = img[count]
        compteur.current.innerText = count + 1 + "/" + img.length
        
      },[count,img]);
console.log(styles.image)
    return (
        <div>
            <div id="image" className={styles.image}>
                <img id="0" src={img[0]} alt="Logement Kasa" ref={ref} className={styles.image_img}/>
            </div>
            <div>
               <img src={ChevronDown} onClick={() => setCount(count - 1)} alt="Kasa Down" className={styles.chevron_down}/>
            </div>
            <div>
                <img src={ChevronUp} onClick={() => setCount(count + 1)} alt="Kasa Up" className={styles.chevron_up} />
            </div>
            <div><span ref={compteur} className={styles.compteur}>1/{img.length}</span></div>
        </div>
    )
  }
  
  export default Carousel