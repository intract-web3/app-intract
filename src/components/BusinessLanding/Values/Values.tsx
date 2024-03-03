import React from "react";
import Image from "next/image";
import { actionCardDetails } from "./utils";
import valuesCover from "./assets/valuescover.svg";
import ActionCards from "./ActionCards/ActionCards";
import valuesstyle from "./values.module.css";
import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import clsx from "clsx";
import { Divider } from "@/ui-components/divider/Divider";
function Values() {
  console.log(actionCardDetails);
  return (
    <article className={clsx("flex flex-col justify-center", valuesstyle.main)}>
      <GenericLayout
        heading={"Values"}
        subheading={
          <div className="md:max-w-[70vw]">
            <span style={{ color: "rgba(255, 255, 255, 0.80)" }}>
              Enriching experiences, meaningful rewards, and empowering tools
            </span>{" "}
            that prioritize and enhance the journey of each individual explorer
            within our platform
          </div>
        }
      />
      <div className={valuesstyle.image_style}>
        <Image
          src={valuesCover}
          className={clsx(
            "rounded-[16px] xs:mt-[24px] w-full object-cover min-h-[230px] block "
          )}
          alt={"values-cover"}
        ></Image>
      </div>
      <div className={valuesstyle.card_style}>
        {actionCardDetails.map((actionCardDetail, index) => {
          return (
            <>
              <ActionCards
                key={index}
                textFlag={index % 2 == 0}
                src={actionCardDetail.imgUrl}
                {...actionCardDetail}
              />
              <Divider className="md:my-24 xs:hidden md:block" />
            </>
          );
        })}
      </div>
    </article>
  );
}

export default Values;
