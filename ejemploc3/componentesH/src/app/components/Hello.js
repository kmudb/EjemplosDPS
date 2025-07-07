import React, { useState } from "react";

export function Hello({ nombre = 'Juan', carrera = 'Computación' }) {
  const [name, setName] = useState(nombre);
  const imageUrl = "/db.jpg";

  const changeName = () => {
    setName("Guadalupe");
  };

  return (
    <div style={styles.container}>
      <img
        src={imageUrl}
        alt="Imagen representativa de Don Bosco"
        style={styles.image}
      />
      <h1 style={styles.title}>
        ¡Hola {name}! Estudias <span style={styles.highlight}>{carrera}</span>
      </h1>
      <button onClick={changeName} style={styles.button}>
        Cambiar Nombre
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '1rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '12px',
    marginBottom: '10rem'
  },
  title: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '1rem'
  },
  highlight: {
    color: '#007BFF',
    fontWeight: 'bold'
  },
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }
};
