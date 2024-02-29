import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import genericLayout from "./genericLayout.module.css";
interface IGenericHeadingLayout {
  heading: string;
  subheading?: string | ReactNode;
  className?: string;
}
const GenericLayout: FC<IGenericHeadingLayout> = (props) => {
  return (
    <article
      className={clsx(
        "flex flex-col justify-center items-center mb-[32px]",
        props.className
      )}
    >
      <section>
        <p className={genericLayout.heading}>{props.heading}</p>
        <p className={genericLayout.subheading}>{props.subheading}</p>
      </section>
    </article>
  );
};

export default GenericLayout;
