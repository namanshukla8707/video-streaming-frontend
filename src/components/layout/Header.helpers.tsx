import {
  NavigationTextButtonEnum,
  type NavigationTextButtonsType,
} from "@/types/HeaderTypes";
import { CustomButton } from "../ui/CustomButton";
import { ButtonVariant } from "@/types/UiTypes";
import { CartIcon } from "@/assets/icons/general/icon.cart";
import { LogoutIcon } from "@/assets/icons/general/icon.logout";
import type { BooleanType } from "@/types/GlobalTypes";
import type { User } from "@/types/AuthTypes";
import { RoundedImage } from "../ui/CustomImage";
import { Text } from "../ui/CustomText";
import { CustomTextObjectStyles } from "@/styles/typescriptStyles/uiStyles/CustomText";

const NavigationTextButtons = ({
  buttonList,
  isLoggedIn,
}: NavigationTextButtonsType) => {
  const filteredButtons = buttonList?.filter((item) => {
    if (!isLoggedIn) {
      return item.id !== NavigationTextButtonEnum.DASHBOARD;
    }
  });
  return (
    <div className="nav-txt-btns-box">
      {filteredButtons?.map((item, key) => (
        <CustomButton key={key} variant={ButtonVariant.TEXT} width={"auto"}>
          {item.name}
        </CustomButton>
      ))}
    </div>
  );
};

const NavigationAuthButtons = ({ isLoggedIn }: BooleanType) => {
  return !isLoggedIn ? (
    <div className="nav-auth-btns-box">
      <CustomButton
        children="Log In"
        width={"80px"}
        height={"40px"}
        variant={ButtonVariant.SECONDARY}
      />
      <CustomButton children="Sign Up" width={"90px"} height={"40px"} />
    </div>
  ) : (
    <CustomButton variant={ButtonVariant.ICON} width={"50px"} height={"40px"}>
      <LogoutIcon style={{ color: "#ffffff" }} />
    </CustomButton>
  );
};

const ProfileSection = ({ user }: { user: User }) => {
  return (
    <div className="profile-section-box">
      <RoundedImage altText="profile photo" />
      <Text children={user.username} />
      <Text children={user.role} style={CustomTextObjectStyles.roleTextStyle} />
    </div>
  );
};

export const WebsiteLogo = () => {
  return (
    <div className="website-logo">
      <span className="website-symbol">E</span>
      <span className="website-logo-text">EduVerse</span>
    </div>
  );
};

export const NavigationOptions = ({
  buttonList,
  isLoggedIn,
}: NavigationTextButtonsType) => {
  const user = {
    id: 1,
    username: "Naman Shukla",
    email: "namanshukla8707@gmail.com",
    role: "Student",
  };
  return (
    <div className="main-nav-ops-box">
      <NavigationTextButtons buttonList={buttonList} isLoggedIn={isLoggedIn} />
      <CustomButton variant={ButtonVariant.ICON} width={"50px"} height={"40px"}>
        <CartIcon style={{ color: "#ffffff" }} />
      </CustomButton>
      <ProfileSection user={user} />
      <NavigationAuthButtons isLoggedIn={isLoggedIn} />
    </div>
  );
};
