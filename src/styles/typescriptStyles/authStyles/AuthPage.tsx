import "@/main.scss";
import { type CSSProperties } from "react";

export const AuthPageStyles = {
  authTeachersTileIconStyle: {
    backgroundColor: "#119749ff",
    borderRadius: "8px",
    padding: "5px 10px",
  } as CSSProperties,
  authStudentsTileIconStyle: {
    backgroundColor: "#ef9d1d",
    borderRadius: "8px",
    padding: "5px 10px",
  } as CSSProperties,
  authLeftBoxMainHeadingStyle: {
    fontSize: "36px",
    fontWeight: 600,
  } as CSSProperties,
  authLeftBoxMainDescriptionStyle: {
    fontSize: "20px",
    fontWeight: 500,
  } as CSSProperties,
  authCardSignInBtnStyle: {
    color: "var(--primary-green-color)",
    width: "auto",
    height: "auto",
    fontSize: "14px",
  } as CSSProperties,
  authCardHeadingTextStyle: {
    fontSize: "24px",
    fontWeight: 600,
  } as CSSProperties,
  authCardSubHeadingTextStyle: {
    color: "var(--secondary-text-color)",
    fontSize: "14px",
    fontWeight: 500,
  } as CSSProperties,
  authCardSelectedStudentRoleButtonStyle: {
    border: "2px solid var(--primary-green-color)",
    backgroundColor: "#22c3650d",
  } as CSSProperties,
  authCardNotSelectedRoleButtonStyle: {
    backgroundColor: "var(--primary-gray-color)",
  } as CSSProperties,
  authCardSelectedTeacherRoleButtonStyle: {
    border: "2px solid var(--primary-green-color)",
    backgroundColor: "#22c3650d",
  } as CSSProperties,
  studentRoleButtonTextStyle:{
    color:"var(--primary-green-color)",
    fontSize:"15px",
    fontWeight:500
  } as CSSProperties
};
