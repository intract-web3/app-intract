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
          : actionStyles.action_card_flip,
        actionStyles.action_card_addded,
        "xs:my-32"
      )}
    >
      <section className={!props.textFlag ? actionStyles.firstItem : ""}>
        <p className={actionStyles.heading}>{props.heading}</p>
        <div
          className={clsx(
            props.textFlag
              ? actionStyles.suppported_text
              : actionStyles.suppported_text_flag,
            "xs:mt-[8px]"
          )}
        >
          <span className={actionStyles.highlight}>{props.highlighted}</span>
          <span className={actionStyles.description}>{props.description}</span>
        </div>
      </section>
      <section className={actionStyles.secondItem}>
        <Image
          className={
            "w-full xs:mt-[24px] lg:mt-0 h-[300px] object-cover rounded-[16px]"
          }
          src={props.src}
          alt={"action-card-image"}
        ></Image>
      </section>
    </article>
  );
};

export default ActionCards;
