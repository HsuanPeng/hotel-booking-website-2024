import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import HeroSection from "assets/pic/home/hero_section.png";
import MobileHeroSection from "assets/pic/home/mobile/mobile_hero_section.png";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "80px",
  paddingRight: "80px",
  position: "absolute",
  zIndex: 1,
  width: "100%",
  marginTop: "24px",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "12px",
    paddingRight: "12px",
    marginTop: "16px",
    marginBottom: "16px",
  },
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
  maxWidth: "196px",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "110px",
  },
}));

export const HeaderRight = styled(Box)(({ theme }) => ({
  display: "flex",
  zIndex: 1,
  color: "white",
  alignItems: "center",
  "&>*": {
    cursor: "pointer",
    fontWeight: 700,
    marginLeft: "32px",
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const HeaderRightMobile = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("lg")]: {
    display: "block",
  },
}));

export const CenterContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1760px",
  height: "678px",
  width: "100%",
  position: "absolute",
  top: "236px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
    top: "0px",
    paddingTop: "100px",
  },
}));

export const CenterLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "636px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    alignItems: "center",
  },
}));

export const CenterLeftTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  letterSpacing: "2px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "28px",
  },
}));

export const CenterLeftSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  letterSpacing: "1.2px",
  marginTop: "8px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
    marginTop: "0px",
  },
}));

export const CenterLeftLine = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "2px",
  background: "linear-gradient(to right, #BE9C7C, #fff)",
  marginTop: "40px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const MobileCenterLeftLine = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("lg")]: {
    display: "block",
    background: "linear-gradient(to bottom, #BE9C7C, #fff)",
    height: "83px",
    width: "2px",
    zIndex: 1,
    marginTop: "20px",
  },
}));

export const CenterRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  color: theme.palette.secondary.contrastText,
  maxWidth: "772px",
  width: "100%",
  marginLeft: "152px",
  zIndex: 2,
  [theme.breakpoints.down("lg")]: {
    marginLeft: "0px",
    paddingLeft: "26px",
    paddingRight: "40px",
    marginTop: "100px",
  },
}));

export const CenterRightTitle = styled(Typography)(({ theme }) => ({
  marginTop: "8px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "48px",
    lineHeight: "57.6px",
  },
}));

export const CenterRightSubtitle = styled(Typography)(({ theme }) => ({
  marginTop: "24px",
  fontSize: "32px",
  letterSpacing: "1.5px",
  marginBottom: "40px",
  lineHeight: "48px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
}));

export const BlurWhiteBackground = styled(Box)(({ theme }) => ({
  borderRadius: "80px",
  borderTop: "1px solid #F5F7F9",
  borderRight: "1px solid #F5F7F9",
  background:
    "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.3))",
  backdropFilter: "blur(10px)",
  maxWidth: "924px",
  width: "100%",
  height: "678px",
  zIndex: -1,
  position: "absolute",
  right: "0",
  [theme.breakpoints.down("lg")]: {
    height: "420px",
    top: "321px",
    right: "20px",
    width: "calc(100% - 64px)",
  },
}));

export const BottomLineContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  position: "absolute",
  zIndex: 1,
  top: "1044px",
  left: "50%",
  transform: "translateX(-50%)",
  "&>*": {
    marginLeft: "6px",
  },
  [theme.breakpoints.down("lg")]: {
    top: "774px",
  },
}));

export const BottomLongLine = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "4px",
  borderRadius: "100px",
  backgroundColor: theme.palette.primary.main,
}));

export const BottomShortLine = styled(Box)(({ theme }) => ({
  width: "32px",
  height: "4px",
  borderRadius: "100px",
  backgroundColor: theme.palette.primary[40],
}));

export const BackgroundMask = styled(Box)({
  width: "100%",
  height: "1080px",
  backgroundColor: "black",
  opacity: 0.6,
  position: "absolute",
});

export const BackgroundImage = styled(Box)(({ theme }) => ({
  height: "1080px",
  backgroundImage: `url(${HeroSection})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: -1,
  [theme.breakpoints.down("lg")]: {
    backgroundImage: `url(${MobileHeroSection})`,
    backgroundPosition: "center",
    backgroundSize: "center",
    backgroundRepeat: "no-repeat",
    height: "800px",
  },
}));
