import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

type TProps = {
  children: React.ReactNode;
};

const ButtonContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.secondary.contrastText,
  transition: "background-color 0.3s",
  color: theme.palette.secondary.main,
  position: "relative",
  borderRadius: "8px",
  zIndex: 2,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
    ".line": {
      backgroundColor: theme.palette.secondary.contrastText,
      maxWidth: "120px",
    },
  },
}));

const ButtonInnterContainer = styled(Box)(({ theme }) => ({
  padding: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  [theme.breakpoints.down("lg")]: {
    padding: "20px",
  },
}));

const ButtonText = styled(Typography)(({ theme }) => ({
  letterSpacing: "1.2px",
  marginRight: "16px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },
}));

const ButtonLine = styled(Box)(({ theme }) => ({
  maxWidth: "150px",
  width: "100%",
  height: "1px",
  backgroundColor: theme.palette.secondary.main,
}));

const UiHeroButton = ({ children }: TProps) => {
  return (
    <ButtonContainer>
      <ButtonInnterContainer>
        <ButtonText variant="h5">{children}</ButtonText>
        <ButtonLine className="line" />
      </ButtonInnterContainer>
    </ButtonContainer>
  );
};

export default UiHeroButton;
