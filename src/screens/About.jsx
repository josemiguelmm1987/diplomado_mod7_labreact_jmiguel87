import { useSelector } from "react-redux";
const About = () => {
  const valor = useSelector((state) => state.product.initialValue);
  return (
    <>
      <p>Componente para About</p>
      <div>
        <span>{valor}</span>
      </div>
    </>
  );
};

export default About;
