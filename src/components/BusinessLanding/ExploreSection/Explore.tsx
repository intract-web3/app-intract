import { Divider } from "@/ui-components/divider/Divider";
import React from "react";
import GemsAtoms from "./atoms/gemsAtoms";
import clsx from "clsx";
import styles from "./explore.module.css";
import Button from "@/ui-components/button/Button";
import Image from "next/image";
import img from "./assets/BG.png";
import Pair from "./Pair";
function Explore() {
  return (
    <div className={styles.exploreSection}>
      <div className={clsx(styles.content, "relative")}>
        <div className="flex">
          <Pair
            values={["GEMs", "XPs"]}
            className={clsx(
              styles.pair,
              "md:w-[218px] xs:w-[115px] absolute top-0 left-0 flex justify-between "
            )}
          />
          <Pair
            values={["NFTs", "USDC"]}
            className={clsx(
              styles.pair,
              "md:w-[218px] xs:w-[115px] absolute top-0 right-0 flex justify-between"
            )}
          />
        </div>
        <h1 className={styles.headline}>
          Explore, Learn <br /> and <i> Earn</i>
        </h1>
        <p className={styles.description}>
          Embark on a Journey of Discovery and <br /> Earnings with Our Quest
          Platform
        </p>
        <Button className={styles.exploreButton} name="Explore"></Button>
      </div>
    </div>
  );
}

export default Explore;
