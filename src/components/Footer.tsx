import { Box } from "@mui/material";
import LogoWhite from "assets/logo/logo_white.svg";
import { ReactComponent as Line } from "assets/icons/ic_line.svg";
import { ReactComponent as Instagram } from "assets/icons/ic_instagram.svg";
import {
  FooterContainer,
  FooterContainerBox,
  ContainerTop,
  TopLeft,
  PicBox,
  PicCircle,
  Pic,
  TopRight,
  TopRightBox,
  TopRightItem,
  ItemTitle,
  ItemText,
  ContainerBottom,
  BottomText,
} from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainerBox>
        <ContainerTop>
          <TopLeft>
            <Box>
              <img src={LogoWhite} alt="logo" />
            </Box>
            <PicBox>
              <PicCircle>
                <Pic>
                  <Line fill="white" />
                </Pic>
              </PicCircle>
              <PicCircle>
                <Pic>
                  <Instagram fill="white" />
                </Pic>
              </PicCircle>
            </PicBox>
          </TopLeft>
          <TopRight>
            <TopRightBox>
              <TopRightItem>
                <ItemTitle variant="title">TEL</ItemTitle>
                <ItemText>+886-7-1234567</ItemText>
              </TopRightItem>
              <TopRightItem>
                <ItemTitle variant="title">FAX</ItemTitle>
                <ItemText>+886-7-1234567</ItemText>
              </TopRightItem>
            </TopRightBox>
            <TopRightBox>
              <TopRightItem>
                <ItemTitle variant="title">MAIL</ItemTitle>
                <ItemText>elh@hexschool.com</ItemText>
              </TopRightItem>
              <TopRightItem>
                <ItemTitle variant="title">WEB</ItemTitle>
                <ItemText>www.elhhexschool.com.tw</ItemText>
              </TopRightItem>
            </TopRightBox>
          </TopRight>
        </ContainerTop>
        <ContainerBottom>
          <BottomText>806023 台灣高雄市新興區六角路123號</BottomText>
          <BottomText>© 享樂酒店 2023 All Rights Reserved.</BottomText>
        </ContainerBottom>
      </FooterContainerBox>
    </FooterContainer>
  );
};

export default Footer;
