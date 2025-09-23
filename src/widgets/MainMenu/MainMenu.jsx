import router from "@/shared/config/routes/routes.jsx";
import { NavLink } from "react-router";
import styles from "./MainMenu.module.css";

function MainMenu() {
  const rootRoute = router.routes;
  const children = rootRoute[0]?.children || [];

  return (
    <ul className={styles.menu}>
      {children
        .filter((item) => !item.handle?.hidden)
        .map((page, index) => (
          <li key={index} className={styles.menuItem}>
            <NavLink
              to={page.path || "/"}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {page.handle?.title}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}

export default MainMenu;
