import Search from "./Search";
import Tasks from "./Tasks";

function Form() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24">
      <Search />
      <Tasks />
    </div>
  );
}
export default Form;
