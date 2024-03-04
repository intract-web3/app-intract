import React, { FC } from "react";
interface IPairProps {
  values: string[];
  className?: string;
}
const Pair: FC<IPairProps> = (props) => {
  return (
    <div className={props.className}>
      <div>{props.values[0]}</div>
      <div>//</div>
      <div>{props.values[1]}</div>
    </div>
  );
};

export default Pair;
