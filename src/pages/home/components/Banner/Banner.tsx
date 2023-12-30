import UiHeroButton from "components/ui/UiHeroButton";
import {
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
  MobileCenterLeftLine,
} from "./Banner.style";

const Banner = () => {
  return (
    <>
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

export default Banner;
