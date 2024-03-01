import React, { FC } from "react";
import faqcard from "./faqcard.module.css";
import addbuton from "./assets/addbutton.svg";
import Image from "next/image";
interface IFAQcard {
  text: string;
  isOpen: boolean;
  index: number;
  setOpen: (value: number) => void;
}
const FAQcard: FC<IFAQcard> = (props) => {
  const { setOpen } = props;
  return (
    <article className={faqcard.faq_card}>
      <div className={faqcard.faq_text}>{props.text}</div>
      <Image
        className="cursor-pointer"
        src={addbuton}
        alt={"add-button"}
        onClick={() => setOpen(props.index)}
      />
    </article>
  );
};

export default FAQcard;
