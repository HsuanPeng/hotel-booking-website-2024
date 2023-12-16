import { Button, Box } from "@mui/material";
const Ui = () => {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <Box
        sx={{
          border: 1, // 1px solid
          bgcolor: "background.paper", // bgcolor 的 "c" 是小寫，theme.palette.background.paper
          boxShadow: 1, // theme.shadows[1]
          borderRadius: 2, // theme.shape.borderRadius * 2
          p: 2, // theme.spacing(2)
          minWidth: 300, // 300px
          fontFamily: "fontFamily", // theme.typography.fontFamily
        }}
      />
    </div>
  );
};

export default Ui;
