import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "80px 312px 120px 312px",
  backgroundColor: theme.palette.secondary[120],
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    padding: "80px 12px 80px 12px",
  },
}));

export const FooterContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "80px",
  maxWidth: "1296px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    alignItems: "flex-start",
    maxWidth: "375px",
  },
}));

export const ContainerTop = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const TopLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  [theme.breakpoints.down("lg")]: {
    marginBottom: "40px",
  },
}));

export const PicBox = styled(Box)({
  display: "flex",
  gap: "16px",
});

export const PicCircle = styled(Box)({
  borderRadius: "100px",
  border: "1px solid white",
  padding: "8px",
});

export const Pic = styled(Box)({
  width: "24px",
  height: "24px",
});

export const TopRight = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "80px",
  maxWidth: "424px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    gap: "16px",
  },
}));

export const TopRightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  [theme.breakpoints.down("lg")]: {
    gap: "16px",
  },
}));

export const TopRightItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const ItemTitle = styled(Typography)({
  color: "white",
  letterSpacing: "0.32px",
});

export const ItemText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary[40],
  letterSpacing: "0.32px",
}));

export const ContainerBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
  color: "white",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
  },
}));

export const BottomText = styled(Typography)({
  letterSpacing: "0.32px",
});
