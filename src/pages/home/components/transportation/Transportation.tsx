import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ReactComponent as Bed } from "assets/icons/ic_Bed.svg";
import { ReactComponent as Car } from "assets/icons/ic_car.svg";
import { ReactComponent as Train } from "assets/icons/ic_train.svg";
import Map from "assets/pic/home/map.jpg";
import MobileMap from "assets/pic/home/mobile/Map.jpg";
import LongLine from "assets/pic/home/long_line.png";
import MobileLine from "assets/pic/home/mobile/Line.png";
import {
  TransportationContainer,
  TopContainer,
  TitleContainer,
  TitleBox,
  Title,
  TitleLine,
  MapContainer,
  MapAddress,
  MapBox,
  MapBottomContainer,
  MapChoice,
  MapChoicePic,
  MapChoiceTitle,
  MobileMapBox,
  BottomLine,
  MobileBottomLine,
  MapTopContainer,
} from "./Transportation.style";

const Transportation = () => {
  const theme = useTheme();

  return (
    <TransportationContainer>
      <TopContainer>
        <TitleContainer>
          <TitleBox>
            <Title variant="h1">交通方式</Title>
          </TitleBox>
          <TitleLine />
        </TitleContainer>
        <MapContainer>
          <MapTopContainer>
            <MapAddress>台灣高雄市新興區六角路123號</MapAddress>
            <MapBox>
              <img src={Map} />
            </MapBox>
            <MobileMapBox>
              <img src={MobileMap} />
            </MobileMapBox>
          </MapTopContainer>
          <MapBottomContainer>
            <MapChoice>
              <MapChoicePic>
                <Car fill={theme.palette.primary.main} />
              </MapChoicePic>
              <MapChoiceTitle variant="h5">自行開車</MapChoiceTitle>
              <Typography>
                如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
              </Typography>
            </MapChoice>
            <MapChoice>
              <MapChoicePic>
                <Train fill={theme.palette.primary.main} />
              </MapChoicePic>
              <MapChoiceTitle variant="h5">高鐵/火車</MapChoiceTitle>
              <Typography>
                如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
              </Typography>
            </MapChoice>
            <MapChoice>
              <MapChoicePic>
                <Bed fill={theme.palette.primary.main} />
              </MapChoicePic>
              <MapChoiceTitle variant="h5">禮賓車服務</MapChoiceTitle>
              <Typography>
                承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
              </Typography>
            </MapChoice>
          </MapBottomContainer>
        </MapContainer>
      </TopContainer>
      <BottomLine>
        <img src={LongLine} />
      </BottomLine>
      <MobileBottomLine>
        <img src={MobileLine} />
      </MobileBottomLine>
    </TransportationContainer>
  );
};

export default Transportation;
