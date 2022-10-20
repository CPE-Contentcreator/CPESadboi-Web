import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sadboi-Web</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>CPE Sadboi Profile</div>
        <div className={styles.mainli}>
          <Link href="https://github.com/nwtkd"><li><a>Niwatchai Wangtrakuldee</a></li></Link>
          <Link href="https://github.com/ksupasate"><li><a>Supasate Vorathammathorn</a></li></Link>


      
        </div>
      </main>

      <footer className={styles.footer}>
        <h4>Sadboi CPE34</h4> &nbsp;Copyright &copy; 2022  
      </footer>
  </div>
  )
};