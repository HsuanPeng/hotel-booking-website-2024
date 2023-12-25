import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import palette from "./palette";
import typography from "./typography";

// 顏色
declare module "@mui/material/styles" {
  interface PaletteColor {
    120?: string;
    100?: string;
    80?: string;
    60?: string;
    40?: string;
    20?: string;
    10?: string;
    primaryTint?: string;
  }

  interface SimplePaletteColorOptions {
    120?: string;
    100?: string;
    80?: string;
    60?: string;
    40?: string;
    20?: string;
    10?: string;
    primaryTint?: string;
  }
}

// 文字
declare module "@mui/material/styles" {
  interface TypographyVariants {
    displayHeading: React.CSSProperties;
    title: React.CSSProperties;
    tiny: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    displayHeading?: React.CSSProperties;
    title?: React.CSSProperties;
    tiny?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    displayHeading: true;
    title: true;
    tiny: true;
  }
}

// 斷點

const theme = createTheme({
  palette,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        img {
          width: 100%;
          height: auto;
        }
      `,
    },
  },
});

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
