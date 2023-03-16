import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        {children}
      </div>
    </>
  );
};
