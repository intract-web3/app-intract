import React, { Children, FC } from "react";
import gemAtom from "./gemAtoms.module.css";
interface IGemAtoms {
  children: React.ReactNode;
}
const GemsAtoms: FC<IGemAtoms> = (props) => {
  return <div className={`${gemAtom.gematom}`}>{props.children}</div>;
};

export default GemsAtoms;
