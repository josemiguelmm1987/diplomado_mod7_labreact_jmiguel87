import { useSelector } from "react-redux";
import {useState } from "react"
const About = () => {
    //Los hookd en react son funciones ya definidas
    //los hookd siempre tienen el prefijo use
    // hooks: useState, useEffect, useContext, useRef, useTransition
    // es posible crear nuestros propios hooks:; ejemplo useService, useImage, useForm
    // en hook useState me permite manejar variables de estado
  const valor = useSelector((state) => state.product.initialValue);
  const [nameComponent, setNameComponent] = useState('About')
  return (
    <>
      <p>Componente para About</p>
      <p>Componente name: {nameComponent}</p>
      <button onClick={() => {setNameComponent('Curso de Read')}}>Presione Botón</button>
      <div>
        <span>{valor}</span>
      </div>
    </>
  );
};

export default About;
