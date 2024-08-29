import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box sx={{ flex: '1 0 auto' }}>
          <Header />
          <Search />
          <CardGrid />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;