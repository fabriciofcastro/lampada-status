
import Head from 'next/head'
import { useState } from 'react'
import Lampada from '../components/Lampada'
import lampadaOff from '../public/image/desligada.png'
import lampadaOn from '../public/image/ligada.png'
import quebrada from '../public/image/quebrada.png'

const Home: React.FC = () => {

  const [status, setStatus] = useState<string>('desligada')
  const [photo, setPhoto] = useState(lampadaOff)


  function functionLigar() {
    setStatus('ligada')
    setPhoto(lampadaOn)
  }

  function functionQuebrada() {
      setStatus ('quebrada')
      setPhoto(quebrada)
  }

  function functionDesligar(){
    setStatus('desligada')
    setPhoto(lampadaOff)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Lampada status={status}
                 functionLigar=    {functionLigar}
                 functionDesligar= {functionDesligar}
                 functionQuebrada= {functionQuebrada}
                 photo={photo}
        />


      </main>
    </>
  )
}

export default Home