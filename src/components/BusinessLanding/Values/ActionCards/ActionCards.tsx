import clsx from "clsx";
import React, { FC } from "react";
import Image from "next/image";
import actionStyles from "./action.module.css";
import { Divider } from "@/ui-components/divider/Divider";
import Link from "next/link";
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
      <section
        className={clsx(
          !props.textFlag ? actionStyles.firstItem : "",
          "lg:mt-[48px]"
        )}
      >
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
          <br />
        </div>
        <Link
          href={"/"}
          className={clsx(
            "cursor-pointer mt-4 sm:mt-6 block text-base md:text-xl",
            actionStyles.learnmore
          )}
        >
          Learn more
        </Link>
      </section>
      <section className={actionStyles.secondItem}>
        <Image
          className={
            "w-full xs:mt-[24px] lg:mt-0 min-h-[300px] object-cover rounded-[16px]"
          }
          src={props.src}
          alt={"action-card-image"}
        ></Image>
      </section>
    </article>
  );
};

export default ActionCards;
