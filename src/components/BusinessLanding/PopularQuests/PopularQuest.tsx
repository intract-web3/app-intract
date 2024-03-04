"use client";
import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import Button from "@/ui-components/button/Button";
import React from "react";
import popularqueststyles from "./popularQuest.module.css";
import { Card } from "@/ui-components/Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function PopularQuest() {
  return (
    <div className="flex  flex-col justify-center items-center md:px-12 sm:px-8 px-4">
      <GenericLayout heading={"Popular Quests"} />
      <Button
        className={popularqueststyles.button_discover_more}
        name={"Discover More"}
      />
    </div>
  );
}

export default PopularQuest;
