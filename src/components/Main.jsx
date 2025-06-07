import { useState } from 'react';
import Estudios from './Estudios';
import SoftSkills from './SoftSkills';
import Idiomas from './Idiomas';
import Proyectos from './Proyectos';
import BurbujasNav from './BurbujasNav';

function Main() {
  const [seccionActiva, setSeccionActiva] = useState(null);

  const renderizarContenido = () => {
    switch (seccionActiva) {
      case 'estudios':
        return <Estudios />;
      case 'softskills':
        return <SoftSkills />;
      case 'proyectos':
        return <Proyectos />;
      case 'idiomas':
        return <Idiomas />;
        return (
          <div>
            <p>📞 WhatsApp: +54 381 459 0520</p>
            <p>✉️ Email: gaboles1996@gmail.com</p>
          </div>
        );
      default:
        return null; // 🔒 Nada visible hasta que hagas clic
    }
  };

  return (
    <>
      <BurbujasNav onSeleccionar={setSeccionActiva} seccionActiva={seccionActiva} />
      <div style={{ marginTop: "20px" }}>
        {renderizarContenido()}
      </div>
    </>
  );
}

export default Main;
