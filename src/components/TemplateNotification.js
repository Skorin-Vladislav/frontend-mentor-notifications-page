import React from "react";
import "./TemplateNotification.scss";
function TemplateNotification(props) {
  return (
    <div className={`temp-notification ${props.state ? "" : "browsed"}`}>
      <img className="temp-img" src={props.src} alt="avatar"></img>

      <div className="flex-wrap">
        <div className="temp-data">
          <div className="temp-name">{props.name}</div>{" "}
          <div className="temp-text">{props.text}</div>
          <div
            className={`temp-topic ${
              props.text.includes("group") ? "group" : ""
            }`}
          >
            {" "}
            {props.topic}
          </div>
        </div>
        <p className="temp-time">{props.time}</p>
      </div>
    </div>
  );
}

export default TemplateNotification;
