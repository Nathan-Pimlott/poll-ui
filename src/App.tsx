import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { pink } from "@mui/material/colors";

import Routes from "./routes";

export default function App() {
  const queryClient = new QueryClient();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#39445e",
        light: "#2e4a87",
      },
      secondary: pink,
    },
    typography: {
      fontFamily: '"Nunito", serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
