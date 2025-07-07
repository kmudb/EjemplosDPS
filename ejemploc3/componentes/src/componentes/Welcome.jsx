
import styles from "../app/page.module.css"
import React from "react";

//componente de clase
export  class Welcome extends React.Component{
    render(){
      return <h1>Hello,{this.props.name} {this.props.apellido}</h1>
    } 
    }