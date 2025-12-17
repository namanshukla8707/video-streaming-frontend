import "@/styles/layoutStyles/Header.scss";
import { CustomButton } from "../ui/CustomButton";
import { ButtonVariant } from "@/types/UiTypes";
import { CartIcon } from "@/assets/icons/general/icon.cart";

const WebsiteLogo = () => {
  return (
    <div className="website-logo">
      <span className="website-symbol">E</span>
      <span className="website-logo-text">EduVerse</span>
    </div>
  );
};

const NavigationOptions = () => {
  return (
    <div className="main-nav-ops-box">
      <div className="main-nav-ops-courses">Courses</div>
      <div>
        <CustomButton variant={ButtonVariant.ICONBUTTON} width={"50px"} height={"40px"}>
          <CartIcon style={{ color: "#ffffff" }} />
        </CustomButton>
      </div>
      <div>
        <CustomButton
          children="Log In"
          width={"80px"}
          height={"40px"}
          variant={ButtonVariant.SECONDARY}
        />
      </div>
      <div>
        <CustomButton children="Sign Up" width={"90px"} height={"40px"} />
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="main-header-box">
      <WebsiteLogo />
      <NavigationOptions />
    </div>
  );
};
