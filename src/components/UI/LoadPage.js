import React from "react";
import classes from "./LoadPage.module.css";

const LoadPage = () => {
  return (
    <div>
        <div className={classes.overlay}></div>
      <div className="absolute w-1/4 top-50 left-50 bg-white text-center">
        <div className={classes.ldsRoller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>Loading</div>
      </div>
    </div>
  );
};

export default LoadPage;
