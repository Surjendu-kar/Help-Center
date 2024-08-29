import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from "@mui/material";
import Header from "./components/Header";
import Search from "./components/Search";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack sx={{ minHeight: "100vh" }}>
        <Header />
        <Search />
        <CardGrid />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
