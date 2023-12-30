import { Typography } from "@mui/material";
import SmallPicOne from "assets/pic/home/small_pic_01.jpg";
import SmallPicTwo from "assets/pic/home/small_pic_02.jpg";
import SmallPicThree from "assets/pic/home/small_pic_03.jpg";
import SmallPicFour from "assets/pic/home/small_pic_04.jpg";
import SmallPicFive from "assets/pic/home/small_pic_05.jpg";
import MobileSmallPicOne from "assets/pic/home/mobile/mobile_small_pic_01.jpg";
import MobileSmallPicTwo from "assets/pic/home/mobile/mobile_small_pic_02.jpg";
import MobileSmallPicThree from "assets/pic/home/mobile/mobile_small_pic_03.jpg";
import MobileSmallPicFour from "assets/pic/home/mobile/mobile_small_pic_04.jpg";
import MobileSmallPicFive from "assets/pic/home/mobile/mobile_small_pic_05.jpg";
import Line from "assets/pic/home/Line.png";
import Dot from "assets/pic/home/dot.png";
import {
  FoodContainer,
  LineBox,
  DotBox,
  TitleContainer,
  TitleBox,
  Title,
  TitleLine,
  ImageListContainer,
  ImageBox,
  ImageContent,
  ImageTitleBox,
  ImageTitle,
  ImageTime,
  ImageText,
  DeskPic,
  MobilePic,
} from "./Food.style";

const Food = () => {
  return (
    <FoodContainer>
      <LineBox>
        <img src={Line} />
      </LineBox>
      <DotBox>
        <img src={Dot} />
      </DotBox>
      <TitleContainer>
        <TitleBox>
          <Title variant="h1">佳餚美饌</Title>
        </TitleBox>
        <TitleLine />
      </TitleContainer>
      <ImageListContainer>
        <ImageBox>
          <ImageContent>
            <ImageTitleBox>
              <ImageTitle>海霸</ImageTitle>
              <ImageTime>
                <Typography>SUN-MON</Typography>
                <Typography>11:00 - 20:30</Typography>
              </ImageTime>
            </ImageTitleBox>
            <ImageText>
              以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
            </ImageText>
          </ImageContent>
          <DeskPic>
            <img src={SmallPicOne} />
          </DeskPic>
          <MobilePic>
            <img src={MobileSmallPicOne} />
          </MobilePic>
        </ImageBox>
        <ImageBox>
          <ImageContent>
            <ImageTitleBox>
              <ImageTitle>日食</ImageTitle>
              <ImageTime>
                <Typography>SUN-MON</Typography>
                <Typography>17:00 - 22:00</Typography>
              </ImageTime>
            </ImageTitleBox>
            <ImageText>
              為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。
            </ImageText>
          </ImageContent>
          <DeskPic>
            <img src={SmallPicTwo} />
          </DeskPic>
          <MobilePic>
            <img src={MobileSmallPicTwo} />
          </MobilePic>
        </ImageBox>
        <ImageBox>
          <ImageContent>
            <ImageTitleBox>
              <ImageTitle>山臻</ImageTitle>
              <ImageTime>
                <Typography>SUN-MON</Typography>
                <Typography>11:30 - 20:30</Typography>
              </ImageTime>
            </ImageTitleBox>
            <ImageText>
              帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。
            </ImageText>
          </ImageContent>
          <DeskPic>
            <img src={SmallPicThree} />
          </DeskPic>
          <MobilePic>
            <img src={MobileSmallPicThree} />
          </MobilePic>
        </ImageBox>
        <ImageBox>
          <ImageContent>
            <ImageTitleBox>
              <ImageTitle>月永</ImageTitle>
              <ImageTime>
                <Typography>SUN-MON</Typography>
                <Typography>11:00 - 20:00</Typography>
              </ImageTime>
            </ImageTitleBox>
            <ImageText>
              從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。
            </ImageText>
          </ImageContent>
          <DeskPic>
            <img src={SmallPicFour} />
          </DeskPic>
          <MobilePic>
            <img src={MobileSmallPicFour} />
          </MobilePic>
        </ImageBox>
        <ImageBox>
          <ImageContent>
            <ImageTitleBox>
              <ImageTitle>天潮</ImageTitle>
              <ImageTime>
                <Typography>SUN-MON</Typography>
                <Typography>14:00 - 19:30</Typography>
              </ImageTime>
            </ImageTitleBox>
            <ImageText>
              我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。
            </ImageText>
          </ImageContent>
          <DeskPic>
            <img src={SmallPicFive} />
          </DeskPic>
          <MobilePic>
            <img src={MobileSmallPicFive} />
          </MobilePic>
        </ImageBox>
      </ImageListContainer>
    </FoodContainer>
  );
};

export default Food;
