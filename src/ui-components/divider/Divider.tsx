import clsx from "clsx";
import dividerStyles from "./divider.module.css";

export const Divider = ({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) => {
  return (
    <hr
      className={clsx(
        dividerStyles.container,
        dividerStyles[`variant-${variant}`]
      )}
    />
  );
};
