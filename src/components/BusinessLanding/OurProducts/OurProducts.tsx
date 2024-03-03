import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import React from "react";
import ourproductStyles from "./ourproducts.module.css";
import Image from "next/image";
import image from "../assets/Grids.png";
import questing from "./assets/ourproduct1.svg";
import clsx from "clsx";
import { Divider } from "@/ui-components/divider/Divider";
import SingleSubCard from "./SingleSubCard";
import SubCards from "./SubCards";
function OurProducts() {
  return (
    <div className={ourproductStyles.main}>
      <GenericLayout
        heading={"Our Products"}
        subheading={
          <>
            Discover Top-Tier Products That Enhance <br /> Your Quest Experience
          </>
        }
      />
      <section className="grid grid-cols-2 overflow-hidden gap-[16px]">
        <div
          className={clsx(ourproductStyles.card, "col-span-2 md:grid-cols-2")}
        >
          <Image
            src={image}
            alt={""}
            className={clsx(
              "w-full h-full absolute top-0 left-0 object-cover",
              ourproductStyles.image_1
            )}
          />
          <article
            className={clsx(
              ourproductStyles.card_inner,
              "relative flex-1 flex-shrink-0 min-w-[50%]"
            )}
          >
            <div className={ourproductStyles.card_heading}>Questing</div>
            <span className={ourproductStyles.card_subheading}>
              Engage in a diverse range of quests tailored to your interests,
              unlocking opportunities for learning and earning rewards
            </span>
          </article>
          <Image
            src={questing}
            alt="questing"
            className="w-full h-auto xs:w-full xs:mt-12 md:w-1/2 lg:w-1/2 xl:w-1/2 md:p-12 sm:mt-12 md:mt-0 relative"
          />
        </div>
      </section>
      <SubCards />
      <Divider />
    </div>
  );
}

export default OurProducts;
