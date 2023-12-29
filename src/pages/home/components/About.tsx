import { Box, Typography } from "@mui/material";

import AboutBG from "assets/pic/home/About_BG.png";

import { useTheme } from "@mui/material/styles";

const About = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: theme.palette.secondary[120],
        pt: "120px",
        pb: "200px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1044px",
          width: "100%",
          height: "672px",
          position: "absolute",
          top: "200px",
          right: "16%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            color: "white",
            p: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
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
              <Typography variant="h1">關於我們</Typography>
            </Box>
            <Box
              sx={{
                maxWidth: "165px",
                width: "100%",
                height: "2px",
                backgroundColor: theme.palette.secondary.contrastText,
              }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                mb: "40px",
              }}
            >
              享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
              我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
            </Typography>
            <Typography
              sx={{
                mb: "40px",
              }}
            >
              我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
              我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
            </Typography>
            <Typography
              sx={{
                mb: "40px",
              }}
            >
              在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
            </Typography>
            <Typography>
              享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            borderRadius: "80px 80px 0px 80px",
            backgroundColor: theme.palette.primary.main,
            borderBottom: "1px solid var(--Neutral-0, #FFF)",
            borderLeft: "1px solid var(--Neutral-0, #FFF)",
            background:
              "linear-gradient(180deg, rgba(20, 15, 10, 0.80), rgba(190, 156, 124, 0.80))",
            backdropFilter: "blur(10px)",
            position: "absolute",
          }}
        />
      </Box>
      <Box
        sx={{
          height: "672px",
          backgroundImage: `url(${AboutBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
};

export default About;
