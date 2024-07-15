"use client"
import { useState } from "react";

export default function Forms({ onDatosCapturados }) {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');
  const [errores, setErrores] = useState({});

  const manejarCambioSelect = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);
  };

  const manejarCambioNombre = (event) => {
    const valorInput = event.target.value;
    setNombre(valorInput);
  };

  const manejarCambioEdad = (event) => {
    const valorInput = event.target.value;
    setEdad(valorInput);
  };

  const manejarCambioGenero = (event) => {
    const valorInput = event.target.value;
    setGenero(valorInput);
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!nombre) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (!edad) {
      nuevosErrores.edad = "La edad es obligatoria";
    } else if (isNaN(edad) || edad <= 0) {
      nuevosErrores.edad = "La edad debe ser un número válido";
    }

    if (!genero) {
      nuevosErrores.genero = "El género es obligatorio";
    }

    if (!opcionSeleccionada) {
      nuevosErrores.carrera = "Debe seleccionar una carrera";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvioFormulario = (event) => {
    event.preventDefault();

    if (validarFormulario()) {
      const datos = {
        nombre: nombre,
        edad: edad,
        carrera: opcionSeleccionada,
        genero: genero,
      };
      onDatosCapturados(datos);

      // Limpiar el formulario después de almacenar los datos
      setNombre('');
      setEdad('');
      setGenero('');
      setOpcionSeleccionada('');
      setErrores({});
    }
  };

  return (
    <div>
      <h2>Formulario de Captura de Datos</h2>
      <form>
        <label>
          Nombre:
          <input
            className="form-control"
            type="text"
            name="nombre"
            value={nombre}
            onChange={manejarCambioNombre}
          />
          {errores.nombre && <div className="error">{errores.nombre}</div>}
        </label>
        <br />
        <label>
          Edad:
          <input
            className="form-control"
            type="number"
            name="edad"
            value={edad}
            onChange={manejarCambioEdad}
          />
          {errores.edad && <div className="error">{errores.edad}</div>}
        </label>
        <br />
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className={`btn btn-secondary ${genero === 'F' ? 'active' : ''}`}>
            <input type="radio" className="options" value="F"
              checked={genero === 'F'}
              onChange={manejarCambioGenero} /> Femenino
          </label>
          <label className={`btn btn-secondary ${genero === 'M' ? 'active' : ''}`}>
            <input type="radio" className="options" value="M"
              checked={genero === 'M'}
              onChange={manejarCambioGenero} /> Masculino
          </label>
        </div>
        {errores.genero && <div className="error">{errores.genero}</div>}
        <br />
        <label>
          Selecciona una carrera:
          <select className="custom-select" value={opcionSeleccionada} onChange={manejarCambioSelect}>
            <option value="">Seleccione una carrera</option>
            <option value="Tecnico en ingenieria en computación">Tecnico en ingenieria en computación</option>
            <option value="Ingenieria en c.c. de la computación">Ingenieria en c.c. de la computación</option>
            <option value="Licenciatura en diseño grafico">Licenciatura en diseño grafico</option>
          </select>
          {errores.carrera && <div className="error">{errores.carrera}</div>}
        </label>
        <br />
        <button className="btn btn-primary" onClick={manejarEnvioFormulario} type="submit">Enviar</button>
      </form>
    </div>
  );
}
