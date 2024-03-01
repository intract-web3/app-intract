import React from "react";
import img from "./assets/grid.png";
import lightlines from "./assets/Lines.png";
import Image from "next/image";
import explorelast from "./explorelast.module.css";
import clsx from "clsx";
import Button from "@/ui-components/button/Button";
function ExploreLast() {
  return (
    <div className="flex flex-col relative justify-center">
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
          "flex justify-centerr relative max-w-[217px] border border-solid border-red items-center",
          explorelast.button
        )}
        name={"Enter Intract"}
      ></Button>
      <Image src={lightlines} alt={""} />
    </div>
  );
}

export default ExploreLast;
