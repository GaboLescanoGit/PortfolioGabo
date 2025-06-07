const habilidades = [
  "Responsabilidad",
  "Proactivo",
  "Adaptabilidad",
  "Pensamiento crítico",
  "Buena comunicación"
];

function SoftSkills() {
  return (
    <ul>
      {habilidades.map((habilidad, index) => (
        <li key={index}>{habilidad}</li>
      ))}
    </ul>
  );
}

export default SoftSkills;
