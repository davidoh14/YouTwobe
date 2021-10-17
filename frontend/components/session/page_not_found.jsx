import React from "react";
import { Link } from "react-router-dom";

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="pagenotfound">
        <h1>404 Page Not Found</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default PageNotFound;
