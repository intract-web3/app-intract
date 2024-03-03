import clsx from "clsx";
import dividerStyles from "./divider.module.css";
import { FC, ReactNode } from "react";
interface IDividerProps {
  distance?: boolean;
  className?: string;
}
export const Divider: FC<IDividerProps> = (props) => {
  return <div className={clsx(dividerStyles.container, props.className)}></div>;
};
