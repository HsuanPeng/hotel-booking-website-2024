import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type TProps = {
  children: React.ReactNode;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  sx?: object;
  variant?: "text" | "outlined" | "contained" | undefined;
  iconSrc?: string;
  isHover?: boolean;
};

const UiButton = ({
  children,
  disabled,
  size,
  sx,
  variant,
  isHover,
}: TProps) => {
  const theme = useTheme();

  return (
    <Button
      disabled={disabled}
      size={size}
      sx={{
        ...sx,
        backgroundColor: isHover
          ? theme.palette.primary[120]
          : theme.palette.primary.main,
      }}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default UiButton;
