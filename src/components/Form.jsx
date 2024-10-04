import Search from "./Search";
import Tasks from "./Tasks";

export default function Task() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center underline font-mono font-extralight md:font-thin tracking-wide text-indigo-100 mt-4">
        TODO
      </h1>
      {<Search />}
      {<Tasks />}
    </div>
  );
}
