import { FunctionComponent } from "react";
import ScrollSidewaysProps from "./ScrollSidewaysProps";

const ScrollSideways: FunctionComponent<ScrollSidewaysProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default ScrollSideways;
