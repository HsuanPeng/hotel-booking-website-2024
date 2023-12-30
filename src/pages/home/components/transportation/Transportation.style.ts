import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TransportationContainer = styled(Box)(({ theme }) => ({
  paddingTop: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.secondary[120],
  [theme.breakpoints.down("lg")]: {
    paddingTop: "80px",
  },
}));

export const TopContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "80px",
  maxWidth: "1296px",
  width: "100%",
});

export const TitleContainer = styled(Box)(({ theme }) => ({
  maxWidth: "304px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "12px",
    paddingRight: "12px",
  },
}));

export const TitleBox = styled(Typography)({
  maxWidth: "98px",
  lineHeight: "57.6px",
  letterSpacing: "5%",
});

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  [theme.breakpoints.down("lg")]: {
    fontSize: "32px",
    maxWidth: "66px",
    lineHeight: "38.4px",
  },
}));

export const TitleLine = styled(Box)({
  maxWidth: "165px",
  width: "100%",
  height: "2px",
  background: "linear-gradient(90deg,#BE9C7C, #fff)",
});

export const MapContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  [theme.breakpoints.down("lg")]: {
    margin: "0 auto",
  },
}));

export const MapAddress = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  marginBottom: "16px",
}));

export const MapBox = styled(Box)(({ theme }) => ({
  marginBottom: "40px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const MobileMapBox = styled(Box)(({ theme }) => ({
  display: "none",
  marginBottom: "24px",
  [theme.breakpoints.down("lg")]: {
    display: "block",
  },
}));

export const MapTopContainer = styled(Box)({
  margin: "0 auto",
});

export const MapBottomContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  color: theme.palette.secondary.contrastText,
  gap: "24px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
}));

export const MapChoice = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "416px",
});

export const MapChoicePic = styled(Box)({
  marginBottom: "16px",
  width: "60px",
  height: "53px",
});

export const MapChoiceTitle = styled(Typography)({
  marginBottom: "8px",
});

export const BottomLine = styled(Box)(({ theme }) => ({
  display: "block",
  marginTop: "80px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const MobileBottomLine = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("lg")]: {
    display: "block",
    marginTop: "40px",
  },
}));
