import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ImgFour from "assets/pic/home/img04.jpg";
import { ReactComponent as ArrowLeft } from "assets/icons/ic_arrowLeft.svg";
import { ReactComponent as ArrowRight } from "assets/icons/ic_arrowRight.svg";
import UiHeroButton from "components/ui/UiHeroButton";

const Room = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: "120px 312px 120px 0px",
        display: "flex",
        alignItems: "left",
        gap: "80px",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <Box
        sx={{
          zIndex: 1,
        }}
      >
        <img src={ImgFour} />
      </Box>
      <Box
        sx={{
          maxWidth: "628px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "40px",
          flexShrink: 0,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.secondary.contrastText,
              lineHeight: "48px",
              mb: "16px",
            }}
          >
            尊爵雙人房
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.secondary.contrastText,
            }}
          >
            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
          </Typography>
        </Box>
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.secondary.contrastText,
          }}
        >
          NT$ 10,000
        </Typography>
        <UiHeroButton>查看更多</UiHeroButton>
        <Box
          sx={{
            display: "flex",
            p: "16px",
            justifyContent: "space-between",
            alignItems: "center",
            color: "red",
            marginLeft: "auto",
            maxWidth: "112px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
            }}
          >
            <ArrowLeft fill={theme.palette.primary.main} />
          </Box>
          <Box
            sx={{
              cursor: "pointer",
            }}
          >
            <ArrowRight fill={theme.palette.primary.main} />
          </Box>
        </Box>
      </Box>
      {/* <Box
        sx={{
          height: "677px",
          position: "absolute",
          bottom: "0px",
        }}
      >
        <img src={BG} />
      </Box> */}
    </Box>
  );
};

export default Room;
