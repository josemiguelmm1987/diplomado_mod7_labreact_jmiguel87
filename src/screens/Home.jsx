import Body from "../Components/Home/Body.jsx";
import Footer from "../Components/Home/Footer.jsx";
import OpenLink from "../Components/Core/OpenLink.jsx";

import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import githubLogo from "../assets/github.svg";

import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "../../store/features/counter/counterSlice.js";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <div>
      <span>{count}</span>
      <br />
      <OpenLink redirectUrl="https://react.dev" logoImage={reactLogo}></OpenLink>
      <OpenLink redirectUrl="https://vite.dev" logoImage={viteLogo}></OpenLink>
      <OpenLink redirectUrl="https://github.com/josemiguelmm1987/diplomado_mod7_labreact_jmiguel87.git" logoImage={githubLogo}></OpenLink>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default Home;
