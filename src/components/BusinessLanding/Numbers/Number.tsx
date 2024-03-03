import React, { FC } from "react";
import numberStyles from "./number.module.css";
import clsx from "clsx";
import { Divider } from "@/ui-components/divider/Divider";
interface INumberProps {
  name: string;
  number: string;
  isLast: boolean;
}
const Number: FC<INumberProps> = (props) => {
  return (
    <article className={numberStyles.numbers_main}>
      <section className={numberStyles.single_number}>
        <div className={numberStyles.name}>{props.name}</div>
        <span className={numberStyles.number}>{props.number}</span>
      </section>
      {!props.isLast && <Divider />}
    </article>
  );
};

export default Number;
