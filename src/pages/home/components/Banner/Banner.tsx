import { Box } from "@mui/material";
import LogoWhite from "assets/logo/logo_white.svg";
import UiHeroButton from "components/ui/UiHeroButton";
import UiButton from "components/ui/UiButton";
import { ReactComponent as Menu } from "assets/icons/ic_menu.svg";
import {
  HeaderContainer,
  HeaderRight,
  BottomLineContainer,
  BackgroundMask,
  BackgroundImage,
  BottomLongLine,
  BottomShortLine,
  BlurWhiteBackground,
  CenterContainer,
  CenterLeft,
  CenterLeftTitle,
  CenterLeftSubtitle,
  CenterLeftLine,
  CenterRight,
  CenterRightTitle,
  CenterRightSubtitle,
  HeaderRightMobile,
  LogoContainer,
  MobileCenterLeftLine,
} from "./Banner.style";

const Header = () => {
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
      <CenterContainer>
        <CenterLeft>
          <CenterLeftTitle variant="h2">享樂酒店</CenterLeftTitle>
          <CenterLeftSubtitle variant="h5">
            Enjoyment Luxury Hotel
          </CenterLeftSubtitle>
          <CenterLeftLine />
          <MobileCenterLeftLine />
        </CenterLeft>
        <CenterRight>
          <CenterRightTitle variant="displayHeading">高雄</CenterRightTitle>
          <CenterRightTitle variant="displayHeading">
            豪華住宿之選
          </CenterRightTitle>
          <CenterRightSubtitle>
            我們致力於為您提供無與倫比的奢華體驗與優質服務
          </CenterRightSubtitle>
          <UiHeroButton>立即訂房</UiHeroButton>
        </CenterRight>
        <BlurWhiteBackground />
      </CenterContainer>
      <BottomLineContainer>
        <BottomLongLine />
        <BottomShortLine />
        <BottomShortLine />
        <BottomShortLine />
        <BottomShortLine />
      </BottomLineContainer>
      <BackgroundMask />
      <BackgroundImage />
    </>
  );
};

export default Header;
