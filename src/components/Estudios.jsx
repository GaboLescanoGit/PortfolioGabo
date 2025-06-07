const estudios = [
  {
    titulo: "Técnico Universitario en Programación",
    institucion: "UTN - Facultad Regional Tucumán",
    año: "2024 - Actualidad"
  },
  {
    titulo: "Curso de Java incial",
    institucion: "Fundacion Proydesa",
    año: "2023"
  }
];

function Estudios() {
  return (
    <ul>
      {estudios.map((e, index) => (
        <li key={index}>
          <strong>{e.titulo}</strong> <br />
          {e.institucion} ({e.año})
        </li>
      ))}
    </ul>
  );
}

export default Estudios;
