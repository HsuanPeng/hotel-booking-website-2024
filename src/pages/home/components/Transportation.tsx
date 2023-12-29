import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ReactComponent as Bed } from "assets/icons/ic_Bed.svg";
import { ReactComponent as Car } from "assets/icons/ic_car.svg";
import { ReactComponent as Train } from "assets/icons/ic_train.svg";
import Map from "assets/pic/home/map.jpg";
import LongLine from "assets/pic/home/long_line.png";

const Transportation = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: "120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "80px",
        backgroundColor: theme.palette.secondary[120],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "80px",
          maxWidth: "1296px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "304px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              maxWidth: "98px",
              lineHeight: "57.6px",
              letterSpacing: "5%",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              交通方式
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "165px",
              width: "100%",
              height: "2px",
              background: "linear-gradient(90deg,#BE9C7C, #fff)",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: theme.palette.secondary.contrastText,
              mb: "16px",
            }}
          >
            台灣高雄市新興區六角路123號
          </Typography>
          <Box
            sx={{
              mb: "40px",
            }}
          >
            <img src={Map} />
          </Box>
          <Box
            sx={{
              display: "flex",
              color: theme.palette.secondary.contrastText,
              gap: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "416px",
              }}
            >
              <Box
                sx={{
                  mb: "16px",
                  width: "60px",
                  height: "53px",
                }}
              >
                <Car fill={theme.palette.primary.main} />
              </Box>
              <Typography
                sx={{
                  mb: "8px",
                }}
                variant="h5"
              >
                自行開車
              </Typography>
              <Typography>
                如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "416px",
              }}
            >
              <Box
                sx={{
                  mb: "16px",
                  width: "60px",
                  height: "53px",
                }}
              >
                <Train fill={theme.palette.primary.main} />
              </Box>
              <Typography
                sx={{
                  mb: "8px",
                }}
                variant="h5"
              >
                自行開車
              </Typography>
              <Typography>
                如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "416px",
              }}
            >
              <Box
                sx={{
                  mb: "16px",
                  width: "60px",
                  height: "53px",
                }}
              >
                <Bed fill={theme.palette.primary.main} />
              </Box>
              <Typography
                sx={{
                  mb: "8px",
                }}
                variant="h5"
              >
                自行開車
              </Typography>
              <Typography>
                如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <img src={LongLine} />
      </Box>
    </Box>
  );
};

export default Transportation;
