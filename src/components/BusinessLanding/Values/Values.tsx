import React from "react";
import Image from "next/image";
import { actionCardDetails } from "./utils";
import valuesCover from "./assets/valuescover.svg";
import ActionCards from "./ActionCards/ActionCards";
import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
function Values() {
  return (
    <article>
      <GenericLayout
        heading={"Values"}
        subheading={
          <div>
            Enriching experiences, meaningful rewards, and empowering tools that
            prioritize and <br /> enhance the journey of each individual
            explorer within our platform
          </div>
        }
      />
      <Image src={valuesCover} className="w-full" alt={"values-cover"}></Image>
      {actionCardDetails.map((actionCardDetail, index) => {
        return (
          <ActionCards
            key={index}
            textFlag={index % 2 == 0}
            src={actionCardDetail.imgUrl}
            {...actionCardDetail}
          />
        );
      })}
    </article>
  );
}

export default Values;
