import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#007FFC", dark: "#2563EB", light: "#60A5FA" },
    secondary: { main: "#7F3DFF" },
    info: { main: "#697FFF" },
    success: { main: "#059669" },
    warning: { main: "#D96704" },
    error: { main: "#BE123C" },
    text: { primary: "#0F172A", secondary: "#475569" },
    divider: "#E2E8F0",
    background: { default: "#FFFFFF" },
  },
 typography: {
  fontFamily: '"Inter", sans-serif',
  h1: { fontFamily: '"Roboto", sans-serif', fontWeight: 700 },
  h2: { fontFamily: '"Roboto", sans-serif', fontWeight: 700 },
  h3: { fontFamily: '"Roboto", sans-serif', fontWeight: 600 },
  h4: { fontFamily: '"Roboto", sans-serif', fontWeight: 600 },
  h5: { fontFamily: '"Roboto", sans-serif', fontWeight: 600 },
  h6: { fontFamily: '"Roboto", sans-serif', fontWeight: 600 },
  button: { textTransform: "none", fontWeight: 600 },
},
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(225deg, rgba(196,181,253,0.3) 0%, rgba(245,208,254,0.2) 50%, rgba(245,208,254,0) 100%)",
          backgroundAttachment: "fixed",
          overflowX: "hidden",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 8, padding: "10px 16px" } },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid #D6E4FF",
          boxShadow: "0 4px 20px rgba(0,127,252,0.08)",
        },
      },
    },
    MuiChip: {
      styleOverrides: { root: { fontSize: 11, fontWeight: 500 } },
    },
  },
});

export const gradients = {
  heading:
    "linear-gradient(90deg, #1E5BF7 0%, #0077F5 35%, #009BE5 60%, #02B6A6 82%, #10B981 100%)",
};

export default theme;