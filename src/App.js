import "./App.css";
import Testimonio from "./components/Testimonio.jsx";
import datosTestimonios from "./components/datos-testimonio.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {datosTestimonios.map((testimonio, index) => (
          <Testimonio
            key={index}
            imagen={testimonio.imagen}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
