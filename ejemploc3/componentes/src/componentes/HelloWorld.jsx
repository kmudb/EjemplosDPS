
import styles from "../app/page.module.css"
import React from "react";


//componente de funcion
export  function HelloWorld(props){
  return <h1>Hello,{props.name} {props.apellido}</h1>
}