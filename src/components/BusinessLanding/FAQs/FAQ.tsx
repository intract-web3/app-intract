import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import { Divider } from "@/ui-components/divider/Divider";
import React from "react";
import FAQcard from "./components/FAQcard";

function FAQ() {
  const FAQ = [
    "What is a Quest on our platform?",
    "How do I earn rewards on your plat..",
    "What kind of products are featured?",
    "Is Web3 knowledge required?",
    "How do I contact customer support?",
    "How can I track my progress?",
  ];
  return (
    <div className=" mt-[96px] flex flex-col justify-between">
      <GenericLayout
        heading={"FAQ's"}
        subheading={<>Clarifying Your Quests – Answers to Common Inquiries</>}
      />
      <div>
        {FAQ.map((text, index) => (
          <FAQcard key={index} text={text} />
        ))}
      </div>
      <Divider />
    </div>
  );
}

export default FAQ;
