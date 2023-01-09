import Sidebar from "./Sidebar";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import "../css/app.css";

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <Sidebar />
        <ContentWrapper />

      </div>
    </React.Fragment>
  );
}

export default App;
