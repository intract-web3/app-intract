import React, { FC, useState } from "react";
import faqcard from "./faqcard.module.css";
import addbuton from "./assets/Add.svg";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import FaqText from "./FaqText.tsx/FaqText";
import clsx from "clsx";
interface IFAQcard {
  text: string;
  index: number;
}
const FAQcard: FC<IFAQcard> = (props) => {
  const [open, setOpen] = useState(false);
  const subtext = [
    "To embark on your quest, simply connect your wallet, browse our collection of quests, and choose the one that aligns with your interests. Follow the on-screen instructions to get started on your exploration journey.",
  ];
  return (
    <>
      <article
        className={clsx(faqcard.faq_card, "cursor-pointer")}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center w-full justify-between">
          <div className={faqcard.faq_text}>{props.text}</div>
          <div className={clsx("cursor-pointer relative", faqcard.button_bg)}>
            <Image className="absolute" src={addbuton} alt={"add-button"} />
            <Image
              className={
                open
                  ? "rotate-180 transition ease-in delay-10000 duration-10000 "
                  : "rotate-90 transition ease-in delay-10000 duration-10000"
              }
              src={addbuton}
              alt={"add-button"}
            />
          </div>
        </div>
        <AnimateHeight height={open ? "auto" : 0} duration={500}>
          hello
          {/* <div className="flex flex-col">
            <FaqText text={subtext[0]} />
            <p className={clsx("mt-[24px]", faqcard.explore_more)}>
              Explore More
            </p>
          </div> */}
        </AnimateHeight>
      </article>
    </>
  );
};

export default FAQcard;
