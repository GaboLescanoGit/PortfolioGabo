const proyectos = [
  {
    nombre: "Portfolio Personal",
    descripcion: "Sitio web hecho en React como trabajo práctico.",
    enlace: "https://github.com/tuusuario/portfolio-react"
  },
  {
    nombre: "Control de Stock",
    descripcion: "Aplicación de escritorio hecha en C# con base de datos.",
    enlace: "https://github.com/tuusuario/control-stock"
  }
];

function Proyectos() {
  return (
    <ul>
      {proyectos.map((p, index) => (
        <li key={index}>
          <strong>{p.nombre}</strong>: {p.descripcion}<br />
          <a href={p.enlace} target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Proyectos;
