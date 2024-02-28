import React from "react";
import businessLandingStyles from "./businessLanding.module.css";
import Explore from "./ExploreSection/Explore";
import OurProducts from "./OurProducts/OurProducts";
import Values from "./Values/Values";
import PopularQuest from "./PopularQuests/PopularQuest";

function BusinessLanding() {
  return (
    <div className={businessLandingStyles.container}>
      <div className={businessLandingStyles.businessLandingContainer}>
        <Explore />
        <OurProducts />
        <Values />
        <PopularQuest />
      </div>
    </div>
  );
}

export default BusinessLanding;
