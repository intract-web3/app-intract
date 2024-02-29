import React, { FC } from "react";
import faqcard from "./faqcard.module.css";
import addbuton from "./assets/addbutton.svg";
import Image from "next/image";
interface IFAQcard {
  text: string;
}
const FAQcard: FC<IFAQcard> = (props) => {
  return (
    <article className={faqcard.faq_card}>
      <div className={faqcard.faq_text}>{props.text}</div>
      <Image src={addbuton} alt={"add-button"} />
    </article>
  );
};

export default FAQcard;
