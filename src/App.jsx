import "./App.css";
import "./index.css";
import Form from "./components/Form";
import { SiDarkreader } from "react-icons/si";
function App() {
  return (
    <>
      <button className="absolute text-white  top-5 left-5 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-10 lg:left-10">
        <SiDarkreader className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white" />
      </button>

      <h1 className="text-4xl sm:text-3xl lg:text-4xl text-center  font-mono font-extralight md:font-thin tracking-wide text-indigo-100 mt-5">
        TODO..
      </h1>
      <Form />
    </>
  );
}

export default App;
