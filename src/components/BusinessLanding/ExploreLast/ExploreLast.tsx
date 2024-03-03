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
    <div
      className={clsx(
        "flex flex-col relative justify-center",
        explorelast.main
      )}
    >
      <Image
        src={img}
        className="w-full h-full absolute top-0 left-0 object-fit"
        alt="explore-image"
      />
      <span
        className={clsx(
          "flex justify-center items-center relative",
          explorelast.explore_text
        )}
      >
        Explore
      </span>
      <span
        className={clsx(
          "flex justify-center relative items-center",
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
      <Image src={lightlines} alt={""} />
    </div>
  );
}

export default ExploreLast;
