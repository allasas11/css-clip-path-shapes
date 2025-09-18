import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import FooterNavigation from "../components/FooterNavigation";


const MainPageLayout = () => (
  <>
    <MainNavigation />
    <main>
      <Outlet />
    </main>
    <FooterNavigation />
  </>
);

export default MainPageLayout;