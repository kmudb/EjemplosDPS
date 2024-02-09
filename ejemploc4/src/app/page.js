"use client"
import styles from "./page.module.css";
import { useState } from "react";
import Forms from "./componets/Forms";
import MostrarDatos from "./componets/MostrarDatos";

export default function Home() {

  const [datosAlmacenados, setDatosAlmacenados] = useState([]);
  // Función de devolución de llamada para recibir el arreglo de datos del componente externo
  const manejarDatosCapturados = (datos) => {
    const nuevosDatos = [...datosAlmacenados, datos];
    setDatosAlmacenados(nuevosDatos);
  };

  return (
    <main className={styles.main}>
    <div>
      <Forms onDatosCapturados={manejarDatosCapturados}/>
      {Object.keys(datosAlmacenados).length > 0 && ( <MostrarDatos datos ={datosAlmacenados}/> )}
    </div>
    </main>
  );
}
