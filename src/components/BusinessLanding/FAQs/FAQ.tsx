"use client";
import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import { Divider } from "@/ui-components/divider/Divider";
import React from "react";
import FAQcard from "./components/FAQcard";
import AnimateHeight from "react-animate-height";

function FAQ() {
  let FAQ = [
    {
      text: "What is a Quest on our platform?",
    },
    {
      text: "How do I earn rewards on your plat..",
    },
    {
      text: "What kind of products are featured?",
    },
    {
      text: "How do I contact customer support?",
    },
    {
      text: "How can I track my progress?",
    },
  ];
  return (
    <div className=" md:mt-[96px] max-w-[1440px] w-full flex flex-col justify-between md:px-12 sm:px-8 px-4">
      <GenericLayout
        heading={"FAQ's"}
        subheading={
          <div className="xs:max-w-[90%]">
            <span style={{ color: "rgba(255, 255, 255, 0.80)" }}>
              Clarifying Your Quests
            </span>{" "}
            – Answers to Common Inquiries
          </div>
        }
      />
      <div>
        <div className="row w-full flex flex-col gap-2 mb-5 md:mt-16 mt-6">
          {FAQ.map((faq, index) => (
            <FAQcard key={index} index={index} text={faq.text} />
          ))}
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default FAQ;
