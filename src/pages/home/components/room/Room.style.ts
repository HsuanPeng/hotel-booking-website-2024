import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RoomContainer = styled(Box)(({ theme }) => ({
  padding: "120px 312px 120px 0px",
  display: "flex",
  alignItems: "left",
  gap: "80px",
  backgroundColor: theme.palette.secondary[120],
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    padding: "0px 0px 80px 0px",
  },
}));

export const RoomImageLine = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "180px",
  right: "0px",
  [theme.breakpoints.down("lg")]: {
    top: "-64px",
    left: "80px",
  },
}));

export const RoomImage = styled(Box)(({ theme }) => ({
  zIndex: 1,
  [theme.breakpoints.down("lg")]: {
    padding: "0px 12px 0px 12px",
  },
}));

export const RoomContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: "628px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "40px",
  [theme.breakpoints.down("lg")]: {
    padding: "0px 12px 0px 12px",
  },
}));

export const ContentTop = styled(Box)({
  marginTop: "auto",
});

export const ContentTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  lineHeight: "48px",
  marginBottom: "16px",
}));

export const ContentText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
}));

export const ContentMoney = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
}));

export const ContentBottom = styled(Box)({
  display: "flex",
  padding: "16px",
  justifyContent: "space-between",
  alignItems: "center",
  color: "red",
  marginLeft: "auto",
  maxWidth: "112px",
  width: "100%",
  zIndex: 1,
});

export const ContentBottomImage = styled(Box)({
  cursor: "pointer",
});

export const RoomBackground = styled(Box)({
  position: "absolute",
  bottom: "0px",
  zIndex: 0,
  width: "100%",
});
