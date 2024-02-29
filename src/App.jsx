
import ListPerson from "./components/ListPerson";
import data from "./data";
import { useState } from "react";


const App = () => {

  const [people, setPeople] = useState(data);

  console.log(people);

  function removeAllPerson() {
    setPeople([]);
  }

  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        <ListPerson people={people}/>
        <button
          type="button"
          className="btn btn-block"
          onClick={removeAllPerson}
        >
          Clear All
        </button>
      </div>
    </main>
  ); 
  
    


};
export default App;
