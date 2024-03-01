"use client";
import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import { Divider } from "@/ui-components/divider/Divider";
import React from "react";
import FAQcard from "./components/FAQcard";
import AnimateHeight from "react-animate-height";

function FAQ() {
  const FAQ = [
    {
      text: "What is a Quest on our platform?",
      isOpen: false,
    },
    {
      text: "How do I earn rewards on your plat..",
      isOpen: false,
    },
    {
      text: "What kind of products are featured?",
      isOpen: false,
    },
    {
      text: "How do I contact customer support?",
      isOpen: false,
    },
    {
      text: "How can I track my progress?",
      isOpen: false,
    },
  ];
  function setOpen(index: number) {
    FAQ[index].isOpen = !FAQ[index].isOpen;
  }
  return (
    <div className=" mt-[96px] flex flex-col justify-between">
      <GenericLayout
        heading={"FAQ's"}
        subheading={<>Clarifying Your Quests – Answers to Common Inquiries</>}
      />
      <div>
        <div className="row g-4 mb-5">
          {FAQ.map((faq, index) => (
            <AnimateHeight duration={300} height={faq.isOpen ? 100 : 75}>
              <FAQcard
                key={index}
                index={index}
                text={faq.text}
                isOpen={faq.isOpen}
                setOpen={setOpen}
              />
            </AnimateHeight>
          ))}
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default FAQ;
