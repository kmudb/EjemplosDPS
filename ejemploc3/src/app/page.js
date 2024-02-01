'use client'
import styles from "./page.module.css";
import React from "react";
import { useState } from "react";


//componente de funcion
export  function HelloWorld(props){
  return <h1>Hello,{props.name} {props.apellido}</h1>
}
//funcion flecha
const Hello=({name, apellido})=>(<h1>Hello,{name} {apellido}</h1>);


//componente de clase
export  class Welcome extends React.Component{
render(){
  return <h1>Hello,{this.props.name} {this.props.apellido}</h1>
} 
}

//funcion padre
export default function Home() {
//states
  const[name,setname]=useState('Luis');
//cambiar states  
  const cambiarname=(nuevoNombre)=>{
    setname(nuevoNombre);
  }


  const datos={
    name:"Laura",
    apellido:"Peña"
  
  };
  return (
    <main className={styles.main}>
        <input type="text" placeholder="Ingrese un nuevo valor" onChange={(e)=>cambiarname(e.target.value)} />
        <HelloWorld name={name} apellido="Paramo"></HelloWorld>
        <Hello name="Juan" apellido="Bosco"></Hello>
        <Welcome {...datos}></Welcome>
    </main>
  );
}
