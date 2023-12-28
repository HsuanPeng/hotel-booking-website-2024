import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SmallPicOne from "assets/pic/home/small_pic_01.jpg";
import SmallPicTwo from "assets/pic/home/small_pic_02.jpg";
import SmallPicThree from "assets/pic/home/small_pic_03.jpg";
import SmallPicFour from "assets/pic/home/small_pic_04.jpg";
import SmallPicFive from "assets/pic/home/small_pic_05.jpg";
import Line from "assets/pic/home/Line.png";
import Dot from "assets/pic/home/dot.png";

const Food = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        py: "120px",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "80px",
        backgroundColor: "#F7F2EE",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "-400px",
          top: "500px",
          transform: "rotate(90deg)",
          zIndex: 1,
        }}
      >
        <img src={Line} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "1640px",
          top: "-40px",
          zIndex: 2,
        }}
      >
        <img src={Dot} />
      </Box>
      <Box
        sx={{
          maxWidth: "304px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ml: "312px",
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
            佳餚美饌
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
          gap: "24px",
          width: "2176px",
          alignItems: "flex-start",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              color: theme.palette.secondary[40],
              width: "100%",
              p: "24px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              bottom: 0,
              backdropFilter: "blur(10px)",
              zIndex: 1,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #140F0A 77.6%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "24px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                }}
              >
                海霸
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <Typography>SUN-MON</Typography>
                <Typography>11:00 - 20:30</Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                letterSpacing: "0.32px",
                lineHeight: "150%",
              }}
            >
              以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
            </Typography>
          </Box>
          <img src={SmallPicOne} />
        </Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              color: theme.palette.secondary[40],
              width: "100%",
              p: "24px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              bottom: 0,
              backdropFilter: "blur(10px)",
              zIndex: 1,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #140F0A 77.6%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "24px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                }}
              >
                日食
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <Typography>SUN-MON</Typography>
                <Typography>17:00 - 22:00</Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                letterSpacing: "0.32px",
                lineHeight: "150%",
              }}
            >
              為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。
            </Typography>
          </Box>
          <img src={SmallPicTwo} />
        </Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              color: theme.palette.secondary[40],
              width: "100%",
              p: "24px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              bottom: 0,
              backdropFilter: "blur(10px)",
              zIndex: 1,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #140F0A 77.6%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "24px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                }}
              >
                山臻
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <Typography>SUN-MON</Typography>
                <Typography>11:30 - 20:30</Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                letterSpacing: "0.32px",
                lineHeight: "150%",
              }}
            >
              帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。
            </Typography>
          </Box>
          <img src={SmallPicThree} />
        </Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              color: theme.palette.secondary[40],
              width: "100%",
              p: "24px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              bottom: 0,
              backdropFilter: "blur(10px)",
              zIndex: 1,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #140F0A 77.6%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "24px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                }}
              >
                月永
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <Typography>SUN-MON</Typography>
                <Typography>11:00 - 20:00</Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                letterSpacing: "0.32px",
                lineHeight: "150%",
              }}
            >
              從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。
            </Typography>
          </Box>
          <img src={SmallPicFour} />
        </Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              color: theme.palette.secondary[40],
              width: "100%",
              p: "24px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              bottom: 0,
              backdropFilter: "blur(10px)",
              zIndex: 1,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #140F0A 77.6%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "24px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                }}
              >
                天潮
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <Typography>SUN-MON</Typography>
                <Typography>14:00 - 19:30</Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                letterSpacing: "0.32px",
                lineHeight: "150%",
              }}
            >
              我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。
            </Typography>
          </Box>
          <img src={SmallPicFive} />
        </Box>
      </Box>
    </Box>
  );
};

export default Food;
