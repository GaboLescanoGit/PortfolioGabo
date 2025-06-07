//Gabriel Lescano Legajo 61522

import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 20px 60px 20px',
        backgroundColor: '#f9f9f9',
        flexWrap: 'wrap'
      }}
    >
      {/* Imagen */}
      <img
        src="/FotoPerfil.png"
        alt="Foto de Gabriel Lescano"
        style={{
          borderRadius: '50%',
          width: '260px',
          height: '260px',
          objectFit: 'cover',
          marginRight: '50px',
          marginBottom: '30px',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)'
        }}
      />

      {/* Información personal */}
      <div style={{
        maxWidth: '600px',
        textAlign: 'left'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '12px',
          color: '#222'
        }}>
          Gabriel Lescano
        </h1>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'normal',
          color: '#555',
          marginBottom: '20px'
        }}>
          Estudiante de Programación – UTN FRT
        </h3>
        <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.6' }}>
          Soy estudiante de 2do año de la Tecnicatura Universitaria en Programación.
          Me interesa el desarrollo web, el diseño de interfaces limpias y el aprendizaje continuo.
          Actualmente estoy desarrollando proyectos con tecnologías como React y C#, mientras continúo aprendiendo y perfeccionando mis habilidades día a día.
        </p>
      </div>
    </motion.header>
  );
}

export default Header;

