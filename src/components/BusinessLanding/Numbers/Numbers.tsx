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
    <div>
      {numbersList.map((number, index) => {
        return <Number name={number.name} number={number.numbers} />;
      })}
    </div>
  );
}

export default Numbers;
