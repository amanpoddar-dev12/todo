import "./App.css";
import "./index.css";
import Form from "./components/Form";
import { SiDarkreader } from "react-icons/si";
function App() {
  function handleTheme() {
    document.documentElement.classList.toggle("dark");
  }
  return (
    <div className="dark:bg-slate-900">
      <button
        className="absolute dark:text-white  text-slate-900 top-10 left-5 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-10 lg:left-10"
        onClick={handleTheme}
      >
        <SiDarkreader className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white" />
      </button>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center underline font-mono font-extralight md:font-thin tracking-wide text-indigo-100 mt-4">
        TODO
      </h1>
      <Form />
    </div>
  );
}

export default App;
