import React from "react";

import ShowDrop from "./ShowDrop";
//used the skeletal frame of previous project then modified it to create Tours Website
const List = ({ answrs, revealer }) => {
  return answrs.map((questbox) => {                 //question
    const { id, rating, name, image, text} = questbox;

    return (
      <article key={id} id={id} className="list">
       I'm blue babadeebabada  
       
      </article>
    );
  });
};

export default List;
