import React from "react";
import Number from "./Number";

function Numbers() {
  const numbersList = [
    {
      name: "Quests",
      numbers: "2K+",
    },
    {
      name: "Projects",
      numbers: "312",
    },
    {
      name: "Rewards Won",
      numbers: "$100K",
    },
    {
      name: "Quests completed",
      numbers: "10 Million",
    },
  ];
  return (
    <div className="xs:mt-20 w-full max-w-[1440px]">
      {numbersList.map((number, index) => {
        return (
          <Number
            name={number.name}
            number={number.numbers}
            isLast={numbersList.length - 1 == index}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Numbers;
