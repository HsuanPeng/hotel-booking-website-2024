import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FoodContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingTop: "120px",
  paddingBottom: "120px",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  gap: "80px",
  backgroundColor: "#F7F2EE",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "80px",
    paddingBottom: "80px",
    gap: "40px",
  },
}));

export const LineBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "-400px",
  top: "500px",
  transform: "rotate(90deg)",
  zIndex: 1,
  overflow: "visible !important",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const DotBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "1640px",
  top: "-40px",
  zIndex: 2,
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
  maxWidth: "304px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "312px",
  [theme.breakpoints.down("lg")]: {
    marginLeft: "12px",
  },
}));

export const TitleBox = styled(Typography)(({ theme }) => ({
  maxWidth: "105px",
  letterSpacing: "5%",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "70px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  [theme.breakpoints.down("lg")]: {
    fontSize: "32px",
    lineHeight: "38.4px",
  },
}));

export const TitleLine = styled(Box)(({ theme }) => ({
  maxWidth: "165px",
  width: "100%",
  height: "2px",
  background: "linear-gradient(90deg,#BE9C7C, #fff)",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "200px",
  },
}));

export const ImageListContainer = styled(Box)({
  display: "flex",
  gap: "24px",
  width: "2176px",
  zIndex: 2,
  animation: "slide 25s linear infinite",
  "@keyframes slide": {
    "0%": {
      transform: "translateX(700px)",
      opacity: 0,
    },
    "5%": {
      opacity: 1,
    },
    "95%": {
      opacity: 1,
    },
    "100%": {
      transform: "translateX(-1000px)",
      opacity: 0,
    },
  },
});

export const ImageBox = styled(Box)({
  position: "relative",
});

export const ImageContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  color: theme.palette.secondary[40],
  width: "100%",
  padding: "24px",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  bottom: 0,
  backdropFilter: "blur(10px)",
  zIndex: 1,
  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #140F0A 77.6%)",
}));

export const DeskPic = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const MobilePic = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("lg")]: {
    display: "block",
  },
}));

export const ImageTitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
  [theme.breakpoints.down("lg")]: {},
}));

export const ImageTitle = styled(Typography)({
  fontSize: "24px",
});

export const ImageTime = styled(Box)({
  display: "flex",
  gap: "16px",
  alignItems: "center",
});

export const ImageText = styled(Typography)({
  letterSpacing: "0.32px",
  lineHeight: "150%",
});
