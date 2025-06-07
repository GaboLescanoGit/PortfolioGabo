const idiomas = [
  { idioma: "Español", nivel: "Nativo" },
  { idioma: "Frances", nivel: "Intermedio"},
  { idioma: "Inglés", nivel: "Intermedio" }
];

function Idiomas() {
  return (
    <ul>
      {idiomas.map((i, index) => (
        <li key={index}>
          {i.idioma} - {i.nivel}
        </li>
      ))}
    </ul>
  );
}

export default Idiomas;
