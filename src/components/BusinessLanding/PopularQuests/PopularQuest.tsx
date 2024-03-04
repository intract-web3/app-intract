import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import Button from "@/ui-components/button/Button";
import React from "react";
import popularqueststyles from "./popularquest.module.css";
import { Card } from "@/ui-components/Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HomeCard } from "./HomeCard/HomeCard";
import { HeroVariant5 } from "./HomeCard/components/HeroVariant5/HeroVariant5";
import { SectionContainer } from "./sectionContainer/SectionContainer";
import { MoreQuests } from "./TrendingQuests/TrendingQuests";
import linghted from "./assets/bggrid.png";
import clsx from "clsx";
import Image from "next/image";
function PopularQuest() {
  return (
    <div
      className={clsx(
        "flex  flex-col justify-center items-center w-full md:px-12 sm:px-8 px-4"
      )}
    >
      <GenericLayout heading={"Popular Quests"} className="md:mb-10" />
      <MoreQuests />
      <Button
        className={clsx(
          popularqueststyles.button_discover_more,
          "md:mt-[46px] xs:mt-[40px]"
        )}
        name={"Discover More"}
      />
      <Image src={linghted} alt="grid" />
    </div>
  );
}

export default PopularQuest;
