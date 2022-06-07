import React from "react";
import  ReactDOM  from "react-dom";

import classes from "./LoadingScreen.module.css"

const Screen = () => {
  return (
    <div className={classes.loading}>
      <div className={classes.loader_container}>
        <div className={classes.loader}></div>
      </div>
    </div>
  )
}

const LoadingScreen = () => {
  return (
    <React.Fragment>
    { ReactDOM.createPortal(<Screen/>, document.getElementById("root-loading")) }
    </React.Fragment>
  )
}

export default LoadingScreen;