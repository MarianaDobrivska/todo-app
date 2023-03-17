import s from "./styles.module.css";

export const Sidebar = ({ pageChange, currentPage }) => {
  const handleActivePage = (page) => {
    if (currentPage === page) return `${s.active}`;
    return `${s.link}`;
  };
  return (
    <aside className={s.sidebar}>
      <nav>
        <ul className={s.sidebarList}>
          <li
            className={handleActivePage("todoPage")}
            onClick={() => {
              pageChange("todoPage");
            }}
          >
            ToDos
          </li>
          <li
            className={handleActivePage("cardsPage")}
            onClick={() => {
              pageChange("cardsPage");
            }}
          >
            Cards
          </li>
        </ul>
      </nav>
    </aside>
  );
};
