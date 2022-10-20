import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Tay from './Tay';

export default function Home() {

    
  return (
    <div className={styles.container}>
      <Head>
        <title>Sadboi-Web</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>CPE Sadboi Profile</div>
        <div className={styles.mainli}>
          <Link href="/niwatchai"><li><a>63070501025 Niwatchai Wangtrakuldee</a></li></Link>
          <Link href="/niwatchai"><li><a>63070501025 Niwatchai Wangtrakuldee</a></li></Link>
         <Tay></Tay>
        </div>
      </main>

      <footer className={styles.footer}>
        <h4>Sadboi CPE34</h4> &nbsp;Copyright &copy; 2022  
      </footer>
  </div>
  )
}
