import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "80px",
  paddingRight: "80px",
  paddingTop: "24px",
  paddingBottom: "24px",
  position: "absolute",
  zIndex: 1,
  width: "100%",
  // backgroundColor: "black",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "16px",
    paddingBottom: "16px",
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
    cursor: "pointer",
  },
}));
