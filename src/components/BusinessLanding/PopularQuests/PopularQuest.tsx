import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import Button from "@/ui-components/button/Button";
import React from "react";
import popularqueststyles from "./popularQuest.module.css";
function PopularQuest() {
  return (
    <div className="flex flex-col justify-center items-center">
      <GenericLayout heading={"Popular Quests"} />
      <Button
        className={popularqueststyles.button_discover_more}
        name={"Discover More"}
      />
    </div>
  );
}

export default PopularQuest;