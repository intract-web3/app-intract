import { Divider } from "@/ui-components/divider/Divider";
import React from "react";
import GemsAtoms from "./atoms/gemsAtoms";
import clsx from "clsx";
import styles from "./explore.module.css";
import Button from "@/ui-components/button/Button";
import Image from "next/image";
import img from "./assets/BG.png";
function Explore() {
  return (
    <div className={styles.exploreSection}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Explore, Learn <br /> and Earn
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
