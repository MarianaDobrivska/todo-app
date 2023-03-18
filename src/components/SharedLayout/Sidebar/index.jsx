import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import s from "./styles.module.css";

const getNavLinkClassName = ({ isActive }) =>
  clsx(s.link, isActive && s.active);

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className={s.sidebar}>
      <nav>
        <ul className={s.sidebarList}>
          <li>
            <NavLink
              to="/todos"
              className={
                location.pathname === "/" ? s.active : getNavLinkClassName
              }
            >
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink to="/cards" className={getNavLinkClassName}>
              Cards
            </NavLink>
          </li>
          <li>
            <NavLink to="/done" className={getNavLinkClassName}>
              Done
            </NavLink>
          </li>
          <li>
            <NavLink to="/trash" className={getNavLinkClassName}>
              Trash
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
