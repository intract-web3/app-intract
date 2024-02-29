import { Divider } from "@/ui-components/divider/Divider";
import React from "react";
import GemsAtoms from "./atoms/gemsAtoms";
import clsx from "clsx";
import exploreMain from "./explore.module.css";
import Button from "@/ui-components/button/Button";
function Explore() {
  return (
    <article
      className={clsx(
        "flex flex-col justify-between min-h-[100vh]",
        `${exploreMain.main}`
      )}
    >
      <section className={clsx("flex flex-row justify-between")}>
        <span>
          <GemsAtoms children={<>{"GEMS // Xps"}</>}></GemsAtoms>
        </span>
        <span>
          <GemsAtoms children={<>{"NFTs // USDC"}</>}></GemsAtoms>
        </span>
      </section>
      <section className="flex flex-col justify-center items-center">
        <p className={exploreMain.explore_heading}>Explore, Learn</p>
        <p className={exploreMain.explore_heading_secondary}> and Earn</p>
      </section>
      <section className={exploreMain.subheading}>
        Embark on a Journey of Discovery and <br /> Earnings with Our Quest
        Platform
      </section>
      <Button className={exploreMain.explore_button} name={"Explore"} />
      <Divider variant="dark" />
    </article>
  );
}

export default Explore;
