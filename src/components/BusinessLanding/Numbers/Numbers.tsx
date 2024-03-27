import React from "react";
import Number from "./Number";

function Numbers() {
  const numbersList = [
    {
      name: "Transactions",
      numbers: "$1B+",
    },
    {
      name: "Onchain actions",
      numbers: "168M+",
    },
    {
      name: "Projects",
      numbers: "10000+",
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
