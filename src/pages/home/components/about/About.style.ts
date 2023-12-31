import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AboutBG from "assets/pic/home/About_BG.png";
import MobileAboutBG from "assets/pic/home/mobile/About_BG.jpg";

export const AboutContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.secondary[120],
  paddingTop: "120px",
  paddingBottom: "200px",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "80px",
    paddingBottom: "120px",
  },
}));

export const AboutBackground = styled(Box)(({ theme }) => ({
  height: "672px",
  backgroundImage: `url(${AboutBG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  [theme.breakpoints.down("lg")]: {
    backgroundImage: `url(${MobileAboutBG})`,
    height: "594px",
  },
}));

export const AboutContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1044px",
  width: "100%",
  maxHeight: "672px",
  position: "absolute",
  top: "200px",
  right: "16%",
  borderRadius: "80px 80px 0px 80px",
  backgroundColor: theme.palette.primary.main,
  borderBottom: "1px solid var(--Neutral-0, #FFF)",
  borderLeft: "1px solid var(--Neutral-0, #FFF)",
  background:
    "linear-gradient(180deg, rgba(20, 15, 10, 0.80), rgba(190, 156, 124, 0.80))",
  backdropFilter: "blur(10px)",
  zIndex: 1,
  color: "white",
  padding: "80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    maxHeight: "594px",
    top: "120px",
    borderRadius: "40px 40px 0px 40px",
    right: "20px",
    width: "calc(100% - 60px)",
    justifyContent: "flex-start",
    padding: "24px",
  },
}));

export const AboutTitleContainer = styled(Box)(({ theme }) => ({
  maxWidth: "304px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "80px",
  [theme.breakpoints.down("lg")]: {
    marginBottom: "40px",
    maxWidth: "267px",
  },
}));

export const AboutTitleBox = styled(Box)(({ theme }) => ({
  maxWidth: "105px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "70px",
  },
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    fontSize: "32px",
    lineHeight: "38.4px",
  },
}));

export const AboutTitleLine = styled(Box)(({ theme }) => ({
  maxWidth: "165px",
  width: "100%",
  height: "2px",
  backgroundColor: theme.palette.secondary.contrastText,
}));

export const AboutTextContainer = styled(Box)(({ theme }) => ({
  "&>*:not(:last-child)": {
    marginBottom: "40px",
  },
  [theme.breakpoints.down("lg")]: {
    "&>*:not(:last-child)": {
      marginBottom: "16px",
    },
  },
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    fontSize: "14px",
    lineHeight: "21px",
  },
}));
