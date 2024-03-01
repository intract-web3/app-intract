import clsx from "clsx";
import React, { FC } from "react";
import Image from "next/image";
import actionStyles from "./action.module.css";
import { Divider } from "@/ui-components/divider/Divider";
interface IActionCardsProps {
  textFlag: boolean;
  src: string;
  heading: string;
  highlighted: string;
  description: string;
}
const ActionCards: FC<IActionCardsProps> = (props) => {
  return (
    <article
      className={clsx(
        props.textFlag
          ? actionStyles.action_card
          : actionStyles.action_card_flip
      )}
    >
      <section className={!props.textFlag ? actionStyles.text_right : ""}>
        <p className={actionStyles.heading}>{props.heading}</p>
        <div className={props.textFlag ? actionStyles.suppported_text : ""}>
          <span className={actionStyles.highlight}>{props.highlighted}</span>
          <span className={actionStyles.description}>{props.description}</span>
        </div>
      </section>
      <section>
        <Image
          className={actionStyles.image}
          src={props.src}
          alt={"action-card-image"}
        ></Image>
      </section>
    </article>
  );
};

export default ActionCards;
