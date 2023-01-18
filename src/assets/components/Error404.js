import React from "react";
import errorImg from "../images/error404.jpg";

function Error404() {
  return (
    <React.Fragment>
      <div>
        <img src={errorImg} alt="error404" />
      </div>
    </React.Fragment>
  );
}

export default Error404;
