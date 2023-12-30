import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NewsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#F7F2EE",
  paddingTop: "120px",
  paddingBottom: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "80px",
    paddingBottom: "80px",
  },
}));

export const NewsContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1296px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
}));

export const DotTop = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "180px",
  top: "100px",
  zIndex: 1,
  [theme.breakpoints.down("lg")]: {
    right: "20px",
    top: "40px",
    maxWidth: "100px",
  },
}));

export const DotBottom = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "-80px",
  left: "200px",
  zIndex: 1,
  [theme.breakpoints.down("lg")]: {
    left: "24px",
    bottom: "-60px",
    maxWidth: "100px",
  },
}));

export const NewsTitleContainer = styled(Typography)({
  maxWidth: "140px",
  width: "100%",
});

export const NewsTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  [theme.breakpoints.down("lg")]: {
    fontSize: "32px",
    maxWidth: "66px",
    lineHeight: "38.4px",
  },
}));

export const NewsTitleLine = styled(Box)(({ theme }) => ({
  marginTop: "40px",
  height: "2px",
  background: "linear-gradient(90deg,#BE9C7C, #fff)",
  [theme.breakpoints.down("lg")]: {
    marginTop: "24px",
  },
}));

export const NewsContent = styled(Box)(({ theme }) => ({
  zIndex: 2,
  "& > div": {
    "&:not(:last-child)": {
      marginBottom: "40px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    marginTop: "40px",
  },
}));
