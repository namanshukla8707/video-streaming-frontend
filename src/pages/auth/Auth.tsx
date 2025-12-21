import { Text } from "@/components/ui/CustomText";
import "@/styles/scssStyles/authStyles/Auth.scss";
import { AuthTile } from "./Auth.helper";
import { AuthPageStyles } from "@/styles/typescriptStyles/authStyles/AuthPage";
import { ConvoHatIcon } from "@/assets/icons/auth/icon.convo-hat";
import { BookIcon } from "@/assets/icons/auth/icon.book";

export const Auth = () => {
  const authTileList = [
    {
      heading: "For Students",
      description: "Access 500+ courses, track progress, and get certified.",
      svgIcon: <ConvoHatIcon style={{ color: "#ffffff" }} />,
      iconDivStyle: AuthPageStyles.authTeachersTileIconStyle,
    },
    {
      heading: "For Teachers",
      description: "Create courses, reach millions, and earn money.",
      svgIcon: <BookIcon style={{ color: "var(--primary-bg-color)" }} />,
      iconDivStyle: AuthPageStyles.authStudentsTileIconStyle,
    },
  ];

  return (
    <div className="main-auth-box">
      <div className="auth-left-box">
        <Text
          children={"Join EduVerse"}
          style={AuthPageStyles.authLeftBoxMainHeadingStyles}
        />
        <Text
          style={AuthPageStyles.authLeftBoxMainDescriptionStyles}
          children={
            "Start your learning journey today with expert-led courses."
          }
        />
        <div className="main-auth-tile-box">
          {authTileList.map((item, key) => (
            <AuthTile
              key={key}
              heading={item.heading}
              description={item.description}
              svgIcon={item.svgIcon}
              iconDivStyle={item.iconDivStyle}
            />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};
