import React from "react";
import "./TemplateNotificationPrivate.scss";
function TemplateNotificationPrivate(props) {
  return (
    <div className={`temp-notification ${props.state ? "" : "browsed"}`}>
      <div className="msg-info">
        <img className="temp-img" src={props.src} alt="avatar"></img>

        <div className="flex-wrap">
          <div className="temp-data">
            <div className="temp-name">{props.name}</div>{" "}
            <div className="temp-text">{props.text}</div>
            <div className="temp-topic"> {props.topic}</div>
          </div>
          <p className="temp-time">{props.time}</p>
        </div>
      </div>

      <div className="private-msg">
        Hello, thanks for setting up the Chess Club. I've been a member for a
        few weeks now and I'm already having lots of fun and improving my game.
      </div>
    </div>
  );
}

export default TemplateNotificationPrivate;
