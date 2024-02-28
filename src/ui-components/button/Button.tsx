import React, { FC } from "react";
interface IButtonProps {
  className: string;
  name: string;
}
const Button: FC<IButtonProps> = (props) => {
  return <div className={props.className}>{props.name}</div>;
};

export default Button;
