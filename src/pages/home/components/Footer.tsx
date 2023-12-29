import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LogoWhite from "assets/logo/logo_white.svg";
import { ReactComponent as Line } from "assets/icons/ic_line.svg";
import { ReactComponent as Instagram } from "assets/icons/ic_instagram.svg";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        padding: "80px 312px 120px 312px",
        backgroundColor: theme.palette.secondary[120],
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "80px",
          alignSelf: "stretch",
          maxWidth: "1296px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            alignSelf: "stretch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "40px",
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
                gap: "16px",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  borderRadius: "100px",
                  border: "1px solid white",
                  padding: "8px",
                }}
              >
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <Line fill="white" />
                </Box>
              </Box>
              <Box
                sx={{
                  borderRadius: "100px",
                  border: "1px solid white",
                  padding: "8px",
                }}
              >
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <Instagram fill="white" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "80px",
              maxWidth: "424px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    letterSpacing: "0.32px",
                    lineHeight: "24px",
                  }}
                  variant="title"
                >
                  TEL
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.secondary[40],
                    letterSpacing: "0.32px",
                    lineHeight: "24px",
                  }}
                >
                  +886-7-1234567
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    letterSpacing: "0.32px",
                    lineHeight: "24px",
                  }}
                  variant="title"
                >
                  FAX
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.secondary[40],
                    letterSpacing: "0.32px",
                    lineHeight: "24px",
                  }}
                >
                  +886-7-1234567
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    letterSpacing: "0.32px",
                    lineHeight: "24px",
                  }}
                  variant="title"
                >
                  MAIL
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.secondary[40],
                    letterSpacing: "0.32px",
                    lineHeight: "24px",
                  }}
                >
                  elh@hexschool.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    letterSpacing: "0.32px",
                    lineHeight: "24px",
                  }}
                  variant="title"
                >
                  WEB
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.secondary[40],
                    letterSpacing: "0.32px",
                    lineHeight: "24px",
                  }}
                >
                  www.elhhexschool.com.tw
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            color: "white",
          }}
        >
          <Typography
            sx={{
              letterSpacing: "0.32px",
              lineHeight: "24px",
            }}
          >
            806023 台灣高雄市新興區六角路123號
          </Typography>
          <Typography
            sx={{
              letterSpacing: "0.32px",
              lineHeight: "24px",
            }}
          >
            © 享樂酒店 2023 All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
