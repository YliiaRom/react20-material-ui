import { Outlet } from "react-router";
import MainMenu from "../MainMenu/MainMenu";

function MainLayout() {
  return (
    <>
      <header>
        <MainMenu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <MainMenu />
      </footer>
    </>
  );
}

export default MainLayout;
