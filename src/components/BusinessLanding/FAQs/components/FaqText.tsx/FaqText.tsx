import React, { FC } from "react";
import faqtext from "./faqtext.module.css";
interface IFFaqText {
  text: string;
}

const FaqText: FC<IFFaqText> = (props) => {
  const { text } = props;
  return <div className={faqtext.faqtext}>{text}</div>;
};

export default FaqText;
