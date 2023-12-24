import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LogoWhite from "assets/logo/logo_white.svg";
import HeroSection from "assets/pic/home/hero_section.png";
import UiHeroButton from "components/ui/UiHeroButton";
import { useTheme } from "@mui/material/styles";
import UiButton from "components/ui/UiButton";

const Header = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "1080px",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: "80px",
            position: "absolute",
            zIndex: 1,
            width: "100%",
            mt: "24px",
          }}
        >
          <Box>
            <img
              src={LogoWhite}
              alt="logo"
              style={{
                maxWidth: "196px",
                height: "auto",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              zIndex: 1,
              color: "white",
              alignItems: "center",
            }}
          >
            <Typography sx={{ cursor: "pointer", fontWeight: 700 }}>
              客房旅宿
            </Typography>
            <Typography sx={{ ml: "32px", cursor: "pointer", fontWeight: 700 }}>
              會員登入
            </Typography>
            <UiButton
              variant="contained"
              sx={{ ml: "32px", cursor: "pointer", fontWeight: 700 }}
            >
              立即訂房
            </UiButton>
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: "1760px",
            height: "678px",
            width: "100%",
            position: "absolute",
            top: "236px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "636px",
              width: "100%",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.primary.main,
                letterSpacing: "2px",
              }}
            >
              享樂酒店
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.primary.main,
                letterSpacing: "1.2px",
                mt: "8px",
              }}
            >
              Enjoyment Luxury Hotel
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "2px",
                background: "linear-gradient(to right, #BE9C7C, #fff)",
                mt: "40px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: theme.palette.secondary.contrastText,
              maxWidth: "772px",
              width: "100%",
              ml: "152px",
              zIndex: 2,
            }}
          >
            <Typography variant="displayHeading">高雄</Typography>
            <Typography
              variant="displayHeading"
              sx={{
                mt: "8px",
              }}
            >
              豪華住宿之選
            </Typography>
            <Typography
              sx={{
                mt: "24px",
                fontSize: "32px",
                letterSpacing: "1.5px",
              }}
            >
              我們致力於為您提供無與倫比的奢華體驗與優質服務
            </Typography>
            <UiHeroButton>立即訂房</UiHeroButton>
          </Box>
          <Box
            sx={{
              borderRadius: "80px",
              borderTop: "1px solid #F5F7F9",
              borderRight: "1px solid #F5F7F9",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.3))",
              backdropFilter: "blur(10px)",
              maxWidth: "924px",
              width: "100%",
              height: "678px",
              zIndex: -1,
              position: "absolute",
              right: "0",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            position: "absolute",
            zIndex: 1,
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            "&>*:not(:last-child)": {
              mr: "6px",
            },
          }}
        >
          <Box
            sx={{
              width: "60px",
              height: "4px",
              borderRadius: "100px",
              backgroundColor: theme.palette.primary.main,
            }}
          />
          <Box
            sx={{
              width: "32px",
              height: "4px",
              borderRadius: "100px",
              backgroundColor: theme.palette.primary[40],
            }}
          />
          <Box
            sx={{
              width: "32px",
              height: "4px",
              borderRadius: "100px",
              backgroundColor: theme.palette.primary[40],
            }}
          />
          <Box
            sx={{
              width: "32px",
              height: "4px",
              borderRadius: "100px",
              backgroundColor: theme.palette.primary[40],
            }}
          />
          <Box
            sx={{
              width: "32px",
              height: "4px",
              borderRadius: "100px",
              backgroundColor: theme.palette.primary[40],
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "1080px",
            backgroundColor: "black",
            opacity: 0.6,
            position: "absolute",
          }}
        />
        <Box
          sx={{
            height: "1080px",
            backgroundImage: `url(${HeroSection})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            position: "relative",
          }}
        />
      </Box>
    </>
  );
};

export default Header;
