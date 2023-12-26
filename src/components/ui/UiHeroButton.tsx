import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type TProps = {
  children: React.ReactNode;
};

const UiHeroButton = ({ children }: TProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
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
      }}
    >
      <Box
        sx={{
          p: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "1.2px",
            mr: "16px",
          }}
        >
          {children}
        </Typography>
        <Box
          sx={{
            maxWidth: "150px",
            width: "100%",
            height: "1px",
            backgroundColor: theme.palette.secondary.main,
          }}
          className="line"
        />
      </Box>
    </Box>
  );
};

export default UiHeroButton;
