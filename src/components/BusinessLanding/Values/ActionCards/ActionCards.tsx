import clsx from "clsx";
import React, { FC } from "react";
import Image from "next/image";
import actionStyles from "./action.module.css";
interface IActionCardsProps {
  textFlag: boolean;
  src: string;
  heading: string;
  description: string;
}
const ActionCards: FC<IActionCardsProps> = (props) => {
  return (
    <article
      className={clsx(
        `flex flex-col md:tracking-default`,
        `${actionStyles.action_card}`
      )}
    >
      <section>
        <p className={actionStyles.heading}>{props.heading}</p>
        <p className={actionStyles.description}>{props.description}</p>
      </section>
      <Image
        width={700}
        height={400}
        src={props.src}
        alt={"action-card-image"}
      ></Image>
    </article>
  );
};

export default ActionCards;
