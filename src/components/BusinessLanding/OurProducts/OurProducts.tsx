import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import React from "react";
import ourproductStyles from "./ourProducts.module.css";
import Image from "next/image";
import questing from "./assets/ourproduct1.svg";
import clsx from "clsx";
import { Divider } from "@/ui-components/divider/Divider";
function OurProducts() {
  return (
    <div className="">
      <GenericLayout
        heading={"Our Products"}
        subheading={
          <>
            Discover Top-Tier Products That Enhance <br /> Your Quest Experience
          </>
        }
      />
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className={clsx(ourproductStyles.card, "col-span-2 md:flex")}>
          <div className="">
            <p className={ourproductStyles.card_heading}>Questing</p>
            <span className={ourproductStyles.card_subheading}>
              Engage in a diverse range of quests tailored to your interests,
              unlocking opportunities for learning and earning rewards
            </span>
          </div>
          <Image src={questing} className="-m-5 p-0" alt="" />
        </div>
        <div
          className={clsx(
            ourproductStyles.card,
            "col-span-2 md:col-span-1 overflow-hidden"
          )}
        >
          <div>
            <p className={ourproductStyles.card_heading}>Compass</p>
            <span className={ourproductStyles.card_subheading}>
              Explore quests of all projects, Navigate through your wallet
              analytics and rise up the ladder.
            </span>
          </div>
          <Image src={questing} className="-m-5 p-0 " alt="" />
        </div>
        <div
          className={clsx(ourproductStyles.card, "col-span-2  md:col-span-1")}
        >
          <div>
            <p className={ourproductStyles.card_heading}>Collections</p>
            <span className={ourproductStyles.card_subheading}>
              Discover Handpicked Adventures Curated for you
            </span>
          </div>
          <Image src={questing} className="-m-5 p-0 " alt="" />
        </div>
      </section>
      <Divider variant="dark" />
    </div>
  );
}

export default OurProducts;
