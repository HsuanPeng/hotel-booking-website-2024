import UiButton from "../components/ui/UiButton";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const UiContainer = styled(Box)({
  marginTop: "50px",
});

const Ui = () => {
  return (
    <Box
      sx={{
        paddingTop: "50px",
        paddingLeft: "50px",
      }}
    >
      <UiContainer>
        <Typography variant="h1">Button</Typography>
        <UiButton variant="contained">Hello World</UiButton>
      </UiContainer>
    </Box>
  );
};

export default Ui;
