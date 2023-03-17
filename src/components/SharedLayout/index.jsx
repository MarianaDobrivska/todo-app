import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const SharedLayout = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <Sidebar {...props} />
      {children}
    </>
  );
};
