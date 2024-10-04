import Search from "./Search";
import Tasks from "./Tasks";
import { SiDarkreader } from "react-icons/si";

export default function Task() {
  return (
    <>
      {/* Dark mode toggle button fixed at the top left */}
      <button className="absolute top-10 left-5 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-10 lg:left-10">
        <SiDarkreader className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white" />
      </button>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center underline font-mono font-extralight md:font-thin tracking-wide text-indigo-100 mt-4">
        TODO
      </h1>

      <div className="text-white min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24">
        <Search />
        <Tasks />
      </div>
    </>
  );
}
