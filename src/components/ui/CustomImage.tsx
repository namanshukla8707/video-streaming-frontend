import "@/styles/scssStyles/uiStyles/CustomImage.scss";
import dummyProfile from "@/assets/png-images/general/dummy-profile.jpg";
import type { CustomImageType } from "@/types/UiTypes";

export const RoundedImage = ({
  imageUrl = dummyProfile,
  altText,
  style,
}: CustomImageType) => {
  return (
    <img className="rounded-image" src={imageUrl} alt={altText} style={style} />
  );
};
