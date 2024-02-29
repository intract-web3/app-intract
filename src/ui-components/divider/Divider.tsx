import clsx from "clsx";
import dividerStyles from "./divider.module.css";

export const Divider = ({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) => {
  return <div className={dividerStyles.container}></div>;
};
