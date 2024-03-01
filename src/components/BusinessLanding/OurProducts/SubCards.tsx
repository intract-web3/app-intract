import React from "react";
import SingleSubCard from "./SingleSubCard";
import subcard1 from "./assets/subcard1.svg";
import image from "../assets/Grids.png";
import subcardstyle from "./singlesubcard.module.css";
import clsx from "clsx";
function SubCards() {
  return (
    <div className="grid grid-cols-2 gap-[16px] mt-[16px]">
      <div className={clsx("md:col-span-1  col-span-2", subcardstyle.sub_card)}>
        <SingleSubCard
          heading={"Compass"}
          substring={
            "Explore quests of all projects, Navigate through your wallet analytics and rise up the ladder."
          }
          image={subcard1}
        />
      </div>
      <div
        className={clsx("md:col-span-1  col-span-2 ", subcardstyle.sub_card)}
      >
        <SingleSubCard
          heading={"Collections"}
          substring={"Discover Handpicked Adventures Curated for you"}
          image={subcard1}
        />
      </div>
    </div>
  );
}

export default SubCards;
