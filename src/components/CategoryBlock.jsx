import React from "react";
import { setCategoryName } from "../utils/functions";

const CategoryBlock = ({ children }) => {
  let controlNamesArray = [
    "Производные",
    "Пределы",
    "Неопред. интегралы",
    "Дифф. уравнения",
  ];

  return (
    <div className="category-block">
      <div
        className={
          controlNamesArray.includes(children)
            ? "category-image control-image"
            : "category-image"
        }
      >
        {setCategoryName(children)}
      </div>
      <div className="category-name">{children}</div>
    </div>
  );
};

export default CategoryBlock;
