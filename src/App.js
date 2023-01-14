import "./App.scss";
import { useState, useEffect } from "react";
import avatar_mark_webber from "./images/avatar-mark-webber.webp";
import avatar_angela_gray from "./images/avatar-angela-gray.webp";
import avatar_jacob_thompson from "./images/avatar-jacob-thompson.webp";
import avatar_anna_kim from "./images/avatar-anna-kim.webp";
import avatar_nathan_peterson from "./images/avatar-nathan-peterson.webp";
import TemplateNotification from "./components/TemplateNotification";

function App() {
  let [state1, setState1] = useState(true);
  let [state2, setState2] = useState(true);
  let [state3, setState3] = useState(true);
  let [state4, setState4] = useState(true);
  let [state5, setState5] = useState(true);
  let [state6, setState6] = useState(true);
  let [state7, setState7] = useState(true);

  let states = [state1, state2, state3, state7];

  let [counter, setCounter] = useState(
    states.reduce((prev, current) => (prev += current))
  );

  useEffect(() => {
    setCounter(states.reduce((prev, current) => (prev += current)));
  }, [state1, state2, state3, state6, state7]);

  const countStates = () => {
    setCounter(states.reduce((prev, current) => (prev += current)));
  };

  const switchState1 = () => {
    setState1(!state1);
    countStates();
  };

  const switchState2 = () => {
    setState2(!state2);
    countStates();
  };

  const switchState3 = () => {
    setState3(!state3);
    countStates();
  };

  const switchState6 = () => {
    setState6(!state6);
    countStates();
  };

  const switchState7 = () => {
    setState7(!state7);
    countStates();
  };

  return (
    <div className="App">
      <div className="header">
        <div className="notifications">
          <h2>Notifications</h2> <div className="counter">{counter}</div>
        </div>

        <p className="clear-notifications">Mark all as read</p>
      </div>
      <div className="main-page">
        <div onClick={switchState1}>
          <TemplateNotification
            src={avatar_mark_webber}
            name="Mark Webber"
            text="reacted to your recent post"
            topic=" My first tournament today!"
            time="1m ago"
            state={state1}
          />
        </div>

        <div onClick={switchState2}>
          <TemplateNotification
            src={avatar_angela_gray}
            name="Angela Gray"
            text="followed you"
            topic=""
            time="5m ago"
            state={state2}
          />
        </div>

        <div onClick={switchState3}>
          <TemplateNotification
            src={avatar_jacob_thompson}
            name="Jacob Thompson"
            text="has joined your group"
            topic="Chess Club"
            time="1 day ago"
            state={state3}
          />
        </div>

        <div onClick={switchState6}>
          <TemplateNotification
            src={avatar_nathan_peterson}
            name="Nathan Peterson"
            text="reacted to your recent post"
            topic="5 end-game strategies to increase your win rate"
            time="2 weeks ago"
            state={state6}
          />
        </div>

        <div onClick={switchState7}>
          <TemplateNotification
            src={avatar_anna_kim}
            name="Anna Kim"
            text="left the group"
            topic="Chess Club"
            time="2 weeks ago"
            state={state7}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
