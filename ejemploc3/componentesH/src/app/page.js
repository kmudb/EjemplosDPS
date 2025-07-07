'use client'
import React from "react";
import styles from "./page.module.css";
import {Hello} from "./components/Hello";
import {Bye} from "./components/Bye";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hello nombre="Karens"></Hello>
        <Hello></Hello>
        <Hello nombre="Maria" carrera="Diseño Grafico"></Hello>
        <Bye name="Pedro"></Bye>
         <Bye name="Luis"></Bye>
      </main>
    </div>
  );
}
