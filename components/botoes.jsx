import { Children } from "react";
import styles from '../styles/lampada.module.css'


export default function Botoes(props) {

    return (

           <div className={styles.botoes}>
                 <button className={styles.botoes} id="ligar"    onClick={ props.trocaEstado }>Ligar</button>
                 <button className={styles.botoes} id="desligar" onClick={ props.trocaEstado }>Desligar</button>
           </div> 

 
    )
}