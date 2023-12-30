import UiButton from "components/ui/UiButton";
import { ReactComponent as Menu } from "assets/icons/ic_menu.svg";
import { Box } from "@mui/material";
import LogoWhite from "assets/logo/logo_white.svg";
import {
  HeaderContainer,
  HeaderRight,
  HeaderRightMobile,
  LogoContainer,
} from "./Header.style";

const Header = () => {
  return (
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
      <HeaderRightMobile>
        <Menu fill="white" />
      </HeaderRightMobile>
      <HeaderRight>
        <Box>客房旅宿</Box>
        <Box>會員登入</Box>
        <Box>
          <UiButton
            variant="contained"
            sx={{
              fontWeight: "700",
            }}
          >
            立即訂房
          </UiButton>
        </Box>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
