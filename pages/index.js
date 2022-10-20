import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.area}>
        <Head>
          <title>Sadboi-Web</title>
        </Head>
        <main className={styles.main}>
          <div className={styles.title}>CPE Sadboi Profile</div>
          <div className={styles.mainli}>
            <Link href="https://github.com/Napat-Edu">
              <li>
                <a>Napat Wareedee</a>
              </li>
            </Link>
          </div>
        </main>

        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <footer className={styles.footer}>
          <h4>Sadboi CPE34</h4> &nbsp;Copyright &copy; 2022
        </footer>
    </div>
  );
}
