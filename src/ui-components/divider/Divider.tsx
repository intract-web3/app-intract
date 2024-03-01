import clsx from "clsx";
import dividerStyles from "./divider.module.css";
import { FC, ReactNode } from "react";
interface IDividerProps {
  distance?: boolean;
}
export const Divider: FC<IDividerProps> = (props) => {
  return (
    <div
      className={clsx(
        props.distance ? dividerStyles.container : dividerStyles.container_false
      )}
    ></div>
  );
};
