import React, { Fragment } from "react";

const welcomeMessage = currentTime => {
  if (currentTime >= 1 && currentTime < 12) {
    return "Good Morning, ";
  } else if (currentTime >= 12 && currentTime < 19) {
    return "Good Afternoon, ";
  } else {
    return "Good Evening, ";
  }
};

const Message = () => {
  let currentTime = new Date().getHours();

  return <Fragment>{welcomeMessage(currentTime)}</Fragment>;
};

export default Message;
