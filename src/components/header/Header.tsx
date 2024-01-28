import UiButton from "components/ui/UiButton";
import { ReactComponent as Menu } from "assets/icons/ic_menu.svg";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoWhite from "assets/logo/logo_white.svg";
import {
  HeaderContainer,
  HeaderRight,
  HeaderRightMobile,
  LogoContainer,
} from "./Header.style";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const showHeaderRight =
    !location.pathname.includes("signin") &&
    !location.pathname.includes("signup");

  return (
    <>
      <HeaderContainer>
        <LogoContainer
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={LogoWhite} alt="logo" />
        </LogoContainer>
        {showHeaderRight && (
          <>
            <HeaderRightMobile>
              <Menu fill="white" />
            </HeaderRightMobile>
            <HeaderRight>
              <Box>客房旅宿</Box>
              <Box
                onClick={() => {
                  navigate("/signin");
                }}
              >
                會員登入
              </Box>
              <Box>
                <UiButton
                  variant="contained"
                  sx={{
                    fontWeight: "700",
                    height: "56px",
                    width: "129px",
                  }}
                >
                  立即訂房
                </UiButton>
              </Box>
            </HeaderRight>
          </>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
