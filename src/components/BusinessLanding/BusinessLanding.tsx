import React from "react";
import businessLandingStyles from "./businessLanding.module.css";
import Explore from "./ExploreSection/Explore";
import OurProducts from "./OurProducts/OurProducts";
import Values from "./Values/Values";
import PopularQuest from "./PopularQuests/PopularQuest";
import Numbers from "./Numbers/Numbers";
import tear from "./assets/tear.svg";
import Image from "next/image";
import Explorer from "./Explorer/Explorer";
import FAQ from "./FAQs/FAQ";
function BusinessLanding() {
  return (
    <div className={businessLandingStyles.container}>
      <div className={businessLandingStyles.businessLandingContainer}>
        <Explore />
        <OurProducts />
        <Values />
        <PopularQuest />
        <Numbers />
        <Image className="w-[100vw]" src={tear} alt="page-tear" />
        <Explorer />
        <FAQ />
      </div>
    </div>
  );
}

export default BusinessLanding;
