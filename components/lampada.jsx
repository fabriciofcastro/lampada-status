import Image from "next/image"
import Estado from "./estatdoLampada"
import Botoes from "./botoes"

export default function Lampada(props) {


    return (
        <>
            <Estado  >
                 <Image src={props.ligada} alt="" />

            </Estado>
          
        </>
    )
 } 