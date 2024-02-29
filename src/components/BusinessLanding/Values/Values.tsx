import React from "react";
import Image from "next/image";
import { actionCardDetails } from "./utils";
import valuesCover from "./assets/valuescover.svg";
import ActionCards from "./ActionCards/ActionCards";
import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import clsx from "clsx";
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
      <Image
        src={valuesCover}
        className={clsx("w-full h-[230px] object-cover rounded-[16px]")}
        alt={"values-cover"}
      ></Image>
      <div className="mt-32">
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
      </div>
    </article>
  );
}

export default Values;
