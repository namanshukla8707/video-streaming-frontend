import "@/styles/scssStyles/layoutStyles/Header.scss";
import { NavigationTextButtonEnum } from "@/types/HeaderTypes";
import useAuthStore from "@/stores/AuthStore";
import { NavigationOptions, WebsiteLogo } from "./Header.helpers";

export const Header = () => {
  const navigationTextButtonList = [
    { id: NavigationTextButtonEnum.COURSES, name: "Courses" },
    { id: NavigationTextButtonEnum.DASHBOARD, name: "Dashboard" },
  ];
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <div className="main-header-box">
      <WebsiteLogo />
      <NavigationOptions
        buttonList={navigationTextButtonList}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};
