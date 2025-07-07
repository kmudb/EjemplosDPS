import React from "react";

export class Bye extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || "Invitado"
    };
  }

  cambiarNombre = () => {
    this.setState({ name: "Daniel" });
  };

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>👋 ¡Hola, {this.state.name}!</h1>
        <p style={styles.text}>Este es un ejemplo de componente de clase en React.</p>
        <button onClick={this.cambiarNombre} style={styles.button}>
          Cambiar Nombre
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "#f0f4f8",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI, sans-serif"
  },
  title: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "1rem"
  },
  text: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "1.5rem"
  },
  button: {
    padding: "0.6rem 1.2rem",
    fontSize: "1rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s"
  }
};

