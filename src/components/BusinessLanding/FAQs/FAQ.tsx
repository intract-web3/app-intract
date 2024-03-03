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
    <div className=" md:mt-[96px] flex flex-col justify-between">
      <GenericLayout
        heading={"FAQ's"}
        subheading={
          <div className="md:max-w-[90%]">
            <span style={{ color: "rgba(255, 255, 255, 0.80)" }}>
              Clarifying Your Quests
            </span>{" "}
            – Answers to Common Inquiries
          </div>
        }
      />
      <div>
        <div className="row mb-5 sm:mt-32 xs:mt-12">
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
