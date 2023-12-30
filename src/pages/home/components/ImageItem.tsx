import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

type TProps = {
  src: string;
  title: string;
  content: string;
};

const ImageItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  maxWidth: "1076px",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  maxWidth: "474px",
  [theme.breakpoints.down("lg")]: {},
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  marginLeft: "24px",
  maxWidth: "578px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    marginLeft: "0",
    marginTop: "24px",
  },
}));

const ContentContainerTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    fontSize: "28px",
    lineHeight: "33.6px",
    textAlign: "center",
  },
}));

const ContentContainerContent = styled(Typography)(({ theme }) => ({
  marginTop: "24px",
  letterSpacing: "0.32px",
  [theme.breakpoints.down("lg")]: {
    marginTop: "8px",
  },
}));

const ImageItem = ({ src, title, content }: TProps) => {
  return (
    <ImageItemContainer>
      <ImageContainer>
        <img src={src} />
      </ImageContainer>
      <ContentContainer>
        <ContentContainerTitle variant="h3">{title}</ContentContainerTitle>
        <ContentContainerContent variant="body1">
          {content}
        </ContentContainerContent>
      </ContentContainer>
    </ImageItemContainer>
  );
};

export default ImageItem;
