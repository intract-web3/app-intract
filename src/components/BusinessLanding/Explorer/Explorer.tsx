import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import { Divider } from "@/ui-components/divider/Divider";
import React from "react";

function Explorer() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <GenericLayout
        heading={"Hear What Our Explorers Say"}
        subheading={
          <>
            Real Stories, Real Experiences – Our Users Share Their Quest
            Journeys
          </>
        }
      />
      <Divider />
    </div>
  );
}

export default Explorer;
