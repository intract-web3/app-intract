import React from "react";
import img from "./assets/grid.png";
import lightlines from "./assets/Lines.png";
import Image from "next/image";
import explorelast from "./explorelast.module.css";
import clsx from "clsx";
import ArrrowRightShort from "./assets/ArrowRightShort.png";
import Button from "@/ui-components/button/Button";
function ExploreLast() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        className={clsx(
          "flex flex-col relative justify-center",
          explorelast.main
        )}
      >
        <Image
          src={img}
          className="min-w-full h-full absolute top-0 left-0 object-fit"
          alt="explore-image"
        />
        <span
          className={clsx(
            "flex justify-center items-center relative -mb-1",
            explorelast.explore_text
          )}
        >
          Explore
        </span>
        <span
          className={clsx(
            "flex justify-center relative items-center my-12",
            explorelast.now_text
          )}
        >
          Now
        </span>
        <Button
          className={clsx(
            "flex justify-centerr relative max-w-[217px] items-center",
            explorelast.button
          )}
          name={"Enter Intract"}
          hasImg
        ></Button>
      </div>
      <Image src={lightlines} className="h-full w-full" alt={""} />
    </div>
  );
}

export default ExploreLast;
