import "./App.scss";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <div className="notifications">
          <h2>Notifications</h2> <div className="counter">{counter}</div>
        </div>
        <p className="clear-notifications">Mark all as read</p>
      </div>
    </div>
  );
}

export default App;
