'use client'
import styles from "./page.module.css";
import React from "react";
import { useState } from "react";
import { HelloWorld } from "@/componentes/HelloWorld";
import { Welcome } from "@/componentes/Welcome";

//funcion flecha
const Hello=({name, apellido})=>(<h1>Hello,{name} {apellido}</h1>);

//funcion padre
export default function Home() {
//states
  const[name,setname]=useState('Luis');
  const[ape,setApe]=useState('Medrano');
  const[datos,setDatos]=useState({
    name:"Lorena",
    apellido:"Mejia"
  });

//cambiar states  
  const cambiarname=(nuevoNombre)=>{
    setname(nuevoNombre);
    actualizarDatos('name',nuevoNombre);
  }

  const cambiarApe=(nuevoApellido)=>{
    setApe(nuevoApellido);
    actualizarDatos('apellido',nuevoApellido);
  }

  const actualizarDatos = (nuevaVariable, nuevoValor) => {
    setDatos({
      ...datos, // Mantenemos las variables existentes
      [nuevaVariable]: nuevoValor // Actualizamos la variable específica
    });
  };

  return (
    <main className={styles.main}>
        <input type="text" placeholder="Ingrese un nuevo nombre" onChange={(e)=>cambiarname(e.target.value)} />
        <input type="text" placeholder="Ingrese un nuevo Apellido" onChange={(e)=>cambiarApe(e.target.value)} />
        <HelloWorld name={name} apellido={ape}></HelloWorld>
        <Hello name="Juan" apellido="Bosco"></Hello>
        <Welcome {...datos}></Welcome>
    </main>
  );
}
