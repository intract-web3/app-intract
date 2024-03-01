import clsx from "clsx";
import { StaticImageData } from "next/image";
import React, { FC } from "react";
import ArrowImage from "../../components/BusinessLanding/assets/rightarrow.svg";
interface IButtonProps {
  className: string;
  name: string;
  hasImg?: boolean;
}
const Button: FC<IButtonProps> = (props) => {
  return (
    <div className={clsx(props.className, "flex gap-2")}>
      {props.name}
      {props.hasImg && (
        <div>
          {" "}
          <img src={ArrowImage} alt="" />{" "}
        </div>
      )}
    </div>
  );
};

export default Button;
