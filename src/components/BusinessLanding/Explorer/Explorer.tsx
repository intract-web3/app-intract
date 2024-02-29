import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import { Divider } from "@/ui-components/divider/Divider";
import React from "react";
import explorerstyles from "./explorer.module.css";
import ExplorerCard from "./ExplorerCard";
function Explorer() {
  const arr = new Array(1).fill(0);
  return (
    <div className="flex flex-col justify-between">
      <GenericLayout
        heading={"Hear What Our Explorers Say"}
        subheading={
          <div className="mt-[8px]">
            <span className={explorerstyles.highlighted}>
              Real Stories, Real Experiences –
            </span>
            <span>Our Users Share Their Quest Journeys</span>
          </div>
        }
      />
      <div className="flex">
        {arr.map((ele, idx) => {
          return <ExplorerCard key={idx} />;
        })}
      </div>
      <Divider />
    </div>
  );
}

export default Explorer;
