import { Footer } from "./Components/Footer";
import { Links } from "./Components/Links";
import { Profile } from "./Components/Profile";
import { AppStyle } from "./styles/AppStyle";
import { GlobalStyle } from "./styles/GlobalStyle";
function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <Profile />
      <Links />
      <Footer />
    </AppStyle>
  );
}

export default App;
