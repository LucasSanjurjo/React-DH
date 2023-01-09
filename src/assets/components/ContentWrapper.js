import React from "react";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Table from "./Table";
import Topbar from "./Topbar";

function ContentWrapper() {
  return (
    <React.Fragment>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />

          <ContentRowTop />

          <Table />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContentWrapper;
