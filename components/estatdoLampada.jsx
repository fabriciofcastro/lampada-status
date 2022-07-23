import Image from "next/image"
import { useState } from "react"
import imgLampadaLigada from '../public/img/ligada.jpg'
import imgLampadaDesligada from '../public/img/desligada.jpg'

import Botoes from "./botoes"



export default function EstadoDaLampada(props) {

    const [statusLampada, setStatusLampada] = useState(imgLampadaDesligada)


        function modificarEstado(e) {
  
            getStates[e.target.id]()
          
        }

       const getStates = {
            'ligar':    () => setStatusLampada( imgLampadaLigada  ),
            'desligar': () => setStatusLampada( imgLampadaDesligada )

       }

       return (

         <>
            <Image src={statusLampada} alt="" />
            <Botoes trocaEstado={modificarEstado} />
            
         </>
       )
       
}