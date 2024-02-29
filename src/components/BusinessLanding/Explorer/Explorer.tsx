"use client";
import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import { Divider } from "@/ui-components/divider/Divider";
import React from "react";
import explorerstyles from "./explorer.module.css";
import ExplorerCard from "./ExplorerCard";
import { Swiper, SwiperSlide } from "swiper/react";
function Explorer() {
  const arr = new Array(6).fill(0);
  return (
    <div className="flex flex-col justify-between">
      <GenericLayout
        heading={"Hear What Our Explorers Say"}
        subheading={
          <div className="mt-[8px]">
            <span className={explorerstyles.highlighted}>
              Real Stories, Real Experiences –
            </span>
            <span>Our Users Share Their Quest Journeys</span>
          </div>
        }
      />
      <div className="flex gap-[16px]">
        <div>
          <div className="d-none d-sm-block"></div>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              400: {
                slidesPerView: 1.4,
                spaceBetween: 16,
              },
              500: {
                slidesPerView: 1.8,
                spaceBetween: 16,
              },
              600: {
                slidesPerView: 2.3,
                spaceBetween: 16,
              },
              700: {
                slidesPerView: 2.8,
                spaceBetween: 16,
              },
            }}
          >
            {arr.map((data, index) => (
              <SwiperSlide
                key={index}
                style={{
                  height: "auto",
                }}
              >
                <ExplorerCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default Explorer;
