import clsx from "clsx";
import React, { FC } from "react";
import Image from "next/image";
import actionStyles from "./action.module.css";
interface IActionCardsProps {
  textFlag: boolean;
  src: string;
  heading: string;
  highlighted: string;
  description: string;
}
const ActionCards: FC<IActionCardsProps> = (props) => {
  console.log(props.highlighted);
  return (
    <article
      className={clsx(
        `flex flex-col md:tracking-default`,
        `${actionStyles.action_card}`
      )}
    >
      <section>
        <p className={actionStyles.heading}>{props.heading}</p>
        <>
          <span className={actionStyles.highlight}>{props.highlighted}</span>
          <span className={actionStyles.description}>{props.description}</span>
        </>
      </section>
      <Image
        style={{ width: "100%", height: "100%" }}
        className={actionStyles.image}
        src={props.src}
        alt={"action-card-image"}
      ></Image>
    </article>
  );
};

export default ActionCards;
