import { motion } from "framer-motion";

function BurbujasNav({ onSeleccionar, seccionActiva }) {
  const secciones = [
    { id: "estudios", nombre: "Estudios" },
    { id: "proyectos", nombre: "Proyectos" },
    { id: "idiomas", nombre: "Idiomas" },
    { id: "softskills", nombre: "Habilidades blandas" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      {secciones.map((s, i) => (
        <motion.button
          key={s.id}
          onClick={() => onSeleccionar(s.id)}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.08 }}
          style={{
            padding: "12px 22px",
            borderRadius: "30px",
            backgroundColor: seccionActiva === s.id ? "#007acc" : "#e6e6e6",
            color: seccionActiva === s.id ? "#fff" : "#333",
            border: seccionActiva === s.id ? "2px solid #007acc" : "1px solid #ccc",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            margin: "10px",
            fontSize: "16px",
            transition: "all 0.3s ease"
          }}
        >
          {s.nombre}
        </motion.button>
      ))}
    </div>
  );
}

export default BurbujasNav;
