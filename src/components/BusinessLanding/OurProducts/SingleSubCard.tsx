import React, { FC, ReactNode } from "react";
import singlesubcard from "./singlesubcard.module.css";
import clsx from "clsx";
import Image from "next/image";
import subcard from "./assets/subcard1.svg";
interface ISingleSubCard {
  heading: string;
  substring: string;
  image: string;
}
const SingleSubCard: FC<ISingleSubCard> = (props) => {
  return (
    <div className="flex flex-col justify-between h-full ">
      <div className="grid grid-cols-2 min-h-[70px]">
        <span
          className={clsx(singlesubcard.heading, "col-span-2 md:col-span-1")}
        >
          {props.heading}
        </span>
        <span
          className={clsx(singlesubcard.subheading, "col-span-2 md:col-span-1")}
        >
          {props.substring}
        </span>
      </div>
      <div className={clsx("xs:mt-3", singlesubcard.img)}>
        <Image src={props.image} className="col-span-2" alt={"subcard"}></Image>
      </div>
    </div>
  );
};

export default SingleSubCard;
