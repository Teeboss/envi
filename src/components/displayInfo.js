import React from "react";
import "../App.css";

const Datas = (props) => {
  return (
    <div>
      {props.userValue.map((item, index) => {
        <p>{item.Ename}</p>;
      })}
    </div>
  );
};
export default Datas;
