
"use client"
import { useState } from "react";

const MostrarDatos= ({ datos }) => {

    return(
      <div>
      <h2>Datos Almacenados</h2>
        {datos.map(dato => (
   
          <div className="card" >
            {dato.genero==="M" ? (
              <img className="card-img-top" src="/images/hombre.png" alt="Card image cap"/>
            ) : (
              <img className="card-img-top" src="/images/mujer.png" alt="Card image cap"/>
            )}
          
          <div className="card-body">
            <h5 className="card-title">{dato.nombre}</h5>
            <p className="card-text">Edad: {dato.edad}<br/>Carrera: {dato.carrera} </p>
          </div>
        </div>
        ))}
    </div>
    );
  };
  export default MostrarDatos;