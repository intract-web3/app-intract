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
import { Divider } from "@/ui-components/divider/Divider";
import ExploreLast from "./ExploreLast/ExploreLast";
function BusinessLanding() {
  return (
    <div className={businessLandingStyles.container}>
      <div className={businessLandingStyles.businessLandingContainer}>
        <Explore />
        <Divider />
        <OurProducts />
        <Divider />
        <Values />
        <Divider />
        <PopularQuest />
        <Divider />
        <Numbers />
        {/* s */}
        <Explorer />
        <Divider />
        <FAQ />
        <ExploreLast />
      </div>
    </div>
  );
}

export default BusinessLanding;
