import { Divider } from "@/ui-components/divider/Divider";
import React from "react";
import GemsAtoms from "./atoms/gemsAtoms";
import clsx from "clsx";
import exploreMain from "./explore.module.css";
import Button from "@/ui-components/button/Button";
import Image from "next/image";
import img from "./assets/BG.png";
function Explore() {
  return (
    <article className={clsx("flex  flex-col", `${exploreMain.main}`)}>
      <Image src={img} className="relative max-h-[100vh]" alt={""} />
      <div className="absolute w-full h-full left-0 top-0">
        <section className={clsx("flex flex-row justify-between")}>
          <div className={clsx("flex justify-between", exploreMain.gematom)}>
            <span>GEMS</span>
            <span>//</span>
            <span>XPs</span>
          </div>
          <div className={clsx("flex justify-between", exploreMain.gematom)}>
            <span>NFTs</span>
            <span>//</span>
            <span>USDC</span>
          </div>
        </section>
        <div className="flex flex-col justify-center h-[100%]">
          <section className="flex flex-col justify-center items-center">
            <p className={exploreMain.explore_heading}>Explore, Learn</p>
            <p className={exploreMain.explore_heading_secondary}> and Earn</p>
          </section>
          <section className={exploreMain.subheading}>
            Embark on a Journey of Discovery and <br /> Earnings with Our Quest
            Platform
          </section>
          <Button className={exploreMain.explore_button} name={"Explore"} />
        </div>
      </div>
    </article>
  );
}

export default Explore;
