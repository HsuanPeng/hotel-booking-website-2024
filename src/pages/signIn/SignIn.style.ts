import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SignInContainer = styled(Box)(({ theme }) => ({
  paddingTop: "120px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary[120],
  height: "100vh",
  [theme.breakpoints.down("lg")]: {
    top: "0px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "164px",
  },
}));

export const SignInBG = styled(Box)(({ theme }) => ({
  zIndex: 2,
  minWidth: "800px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const SignInFormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  maxWidth: "960px",
  width: "100%",
  maxHeight: "1080px",
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));

export const LineBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "305px",
  zIndex: 0,
  [theme.breakpoints.down("lg")]: {
    top: "104px",
  },
}));

export const SignInForm = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "40px",
  width: "100%",
  maxWidth: "416px",
  zIndex: 1,
});

export const SignInTitleContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
});

export const SignInTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const SignInSubtitle = styled(Typography)(({ theme }) => ({
  color: "white",
  [theme.breakpoints.down("lg")]: {
    fontSize: "32px",
  },
}));

export const InputContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const InputBox = styled(Box)({
  gap: "8px",
  flexDirection: "column",
  width: "100%",
  display: "flex",
});

export const InputLabelBox = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "16px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "14px",
  },
}));

export const Input = styled(TextField)({
  backgroundColor: "white",
  borderRadius: "8px",
});

export const PasswordBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const CheckBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const PasswordForgot = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: "pointer",
  [theme.breakpoints.down("lg")]: {
    fontSize: "14px",
  },
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.secondary[40],
  paddingTop: "16px",
  paddingBottom: "16px",
  paddingLeft: "24px",
  paddingRight: "24px",
  borderRadius: "8px",
  color: theme.palette.secondary[60],
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}));

export const GoRegister = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "8px",
  marginTop: "8px",
});

export const NotCustomer = styled(Typography)(({ theme }) => ({
  color: "white",
  [theme.breakpoints.down("lg")]: {
    fontSize: "14px",
  },
}));

export const GoRegisterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: "pointer",
  [theme.breakpoints.down("lg")]: {
    fontSize: "14px",
  },
}));

export const SignUpStepContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "16px",
  marginBottom: "16px",
});

export const StepNumberContainer = styled(Box)({
  color: "white",
  gap: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const StepNumber = styled(Typography)(({ theme }) => ({
  width: "32px",
  height: "32px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StepLine = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "2px",
  maxWidth: "188px",
  backgroundColor: theme.palette.secondary[60],
  [theme.breakpoints.down("lg")]: {
    maxWidth: "133px",
  },
}));
