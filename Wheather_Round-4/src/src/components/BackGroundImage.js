import React from "react";
import style from "./BackGrounImage.module.css";

import { useState, useEffect } from "react";
const BackGroundImage = (prop) => {
  const [state, updateState] = useState({ time: "morning" });

  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  // console.log(d.valueOf())

  useEffect(() => {
    if (hours >= 17 && hours < 19) {
      updateState({ time: "dusk" });
    } else if (hours > 19 || hours < 6) {
      updateState({ time: "night" });
    }
  }, []);

  return (
    <>
      <div className={`${style?.bg} ${style?.bgImage} ${style[state.time]}`}>
        <img src=""></img>
        <div className={style.children}>{prop.children}</div>
      </div>
    </>
  );
};
export default BackGroundImage;
