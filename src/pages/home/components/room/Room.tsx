import { useTheme } from "@mui/material/styles";
import ImgFour from "assets/pic/home/img04.jpg";
import { ReactComponent as ArrowLeft } from "assets/icons/ic_arrowLeft.svg";
import { ReactComponent as ArrowRight } from "assets/icons/ic_arrowRight.svg";
import Line from "assets/pic/home/Line.png";
import UiHeroButton from "components/ui/UiHeroButton";
import BG from "assets/pic/home/bg.png";
import {
  RoomContainer,
  RoomImageLine,
  RoomImage,
  RoomBackground,
  RoomContentContainer,
  ContentTitle,
  ContentText,
  ContentMoney,
  ContentBottom,
  ContentBottomImage,
  ContentTop,
} from "./Room.style";

const Room = () => {
  const theme = useTheme();

  return (
    <RoomContainer>
      <RoomImageLine>
        <img src={Line} />
      </RoomImageLine>
      <RoomImage>
        <img src={ImgFour} />
      </RoomImage>
      <RoomContentContainer>
        <ContentTop>
          <ContentTitle variant="h2">尊爵雙人房</ContentTitle>
          <ContentText
            variant="body1"
            sx={{
              color: theme.palette.secondary.contrastText,
            }}
          >
            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
          </ContentText>
        </ContentTop>
        <ContentMoney variant="h3">NT$ 10,000</ContentMoney>
        <UiHeroButton>查看更多</UiHeroButton>
        <ContentBottom>
          <ContentBottomImage>
            <ArrowLeft fill={theme.palette.primary.main} />
          </ContentBottomImage>
          <ContentBottomImage>
            <ArrowRight fill={theme.palette.primary.main} />
          </ContentBottomImage>
        </ContentBottom>
      </RoomContentContainer>
      <RoomBackground>
        <img src={BG} />
      </RoomBackground>
    </RoomContainer>
  );
};

export default Room;
