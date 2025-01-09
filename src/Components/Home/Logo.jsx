import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
// import githubLogo from "../../assets/github.svg";
const Logo = () => {
  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      {/* <a href="https://github.com/josemiguelmm1987/diplomado_mod7_labreact_jmiguel87.git" target="_blank">
        <img src={githubLogo} className="logo github" alt="Github logo" />
      </a> */}
    </div>
  );
};

export default Logo;
