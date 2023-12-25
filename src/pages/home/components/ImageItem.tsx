import { Box, Typography } from "@mui/material";

type TProps = {
  src: string;
  title: string;
  content: string;
};

const ImageItem = ({ src, title, content }: TProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1076px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "474px",
          width: "100%",
        }}
      >
        <img src={src} />
      </Box>
      <Box
        sx={{
          ml: "24px",
          maxWidth: "578px",
          width: "100%",
        }}
      >
        <Typography variant="h3">{title}</Typography>
        <Typography
          variant="body1"
          sx={{
            mt: "24px",
            letterSpacing: "0.32px",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageItem;
