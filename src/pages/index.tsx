import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Calculator</h1>
        <input type="text" data-testid="display"></input>
        <button>1</button>
      </main>
    </>
  );
}
