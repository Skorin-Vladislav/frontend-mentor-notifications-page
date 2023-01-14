import React from "react";
import "./TemplateNotificationImg.scss";
function TemplateNotificationImg(props) {
  return (
    <div className={`temp-notification ${props.state ? "" : "browsed"}`}>
      <div className="wrapper">
        <img className="temp-img" src={props.src} alt="avatar"></img>

        <div className="flex-wrap">
          <div className="card-content-wrapper">
            <div className="temp-data">
              <div className="temp-name">{props.name}</div>{" "}
              <div className="temp-text">{props.text}</div>
              <div className="temp-topic">{props.topic}</div>
            </div>

            <img
              className="temp-img-comment"
              src={props.imgSrc}
              alt="commented_picture"
            ></img>
          </div>

          <p className="temp-time">{props.time}</p>
        </div>
      </div>
    </div>
  );
}

export default TemplateNotificationImg;
