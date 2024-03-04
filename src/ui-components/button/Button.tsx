import clsx from "clsx";
import { StaticImageData } from "next/image";
import React, { FC } from "react";
import style from "./button.module.css";
import ArrowImage from "../../components/BusinessLanding/assets/rightarrow.svg";
import { Outfit } from "next/font/google";
import Image from "next/image";
const outfit = Outfit({ subsets: ["latin"] });

interface IButtonProps {
  className: string;
  name: string;
  hasImg?: boolean;
}

const Button: FC<IButtonProps> = (props) => {
  return (
    <div
      className={clsx(
        props.className ? props.className : style.button,
        outfit.className,
        "flex gap-2"
      )}
    >
      {props.name}
      {props.hasImg && (
        <div>
          {" "}
          <Image src={ArrowImage} alt="" />{" "}
        </div>
      )}
    </div>
  );
};

export default Button;
