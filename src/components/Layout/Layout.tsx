import { FunctionComponent } from "react";
import Header from "./Header/Header";
import LayoutProps from "./LayoutProps";

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
