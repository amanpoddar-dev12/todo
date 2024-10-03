import "./App.css";

import "./index.css";
import StarRating from "custom-star-rating";
function App() {
  return (
    <div className="flex items-center flex-col ">
      {
        <StarRating
          maxRating={5}
          defaultRating={3}
          size={40}
          color="gold"
          onSetMovieRating={(rating) => console.log(`New rating: ${rating}`)}
          messages={["Bad", "Okay", "Good", "Great", "Excellent"]}
        />
      }
    </div>
  );
}

export default App;

//1 make an object
//2 add 2 value task,isComplted
//3 itrate them in manner it will show same as previous
//4 when user delete or complete work it should be updated in object
