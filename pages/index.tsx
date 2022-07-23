import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/lampada.module.css'
import Lampada from '../components/lampada'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estado da Lâmpada</title>
        <meta name="description" content="Entendo melhor React" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mude o estado da lâmpada <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Lampada />
        
      </main>

      <footer className={styles.footer}>
        <p>
         Utilizando as vantagens do React, para alterar um estado da lampada, lanças 
          informações para outro componente.
        </p>
        <a
          href="https://github.com/fabriciofcastro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meu GitHub
          
        </a>
      </footer>
    </div>
  )
}

export default Home
