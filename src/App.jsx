import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Links } from "./Components/Links";
import { Profile } from "./Components/Profile";
// import Slide from "./Components/Slide/Slide";

import { SwitchToggle } from "./Components/SwitchToggle/SwitchToggle";
import { AppStyle } from "./styles/AppStyle";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Themes } from "./styles/Themes";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("themeColor") || "primary"
  );
  const toggle = () => {
    setTheme((prev) => (prev === "primary" ? "secondary" : "primary"));
  };

  useEffect(() => {
    localStorage.setItem("themeColor", theme);
  }, [theme]);

  return (
    <ThemeProvider theme={Themes[theme]}>
      <GlobalStyle />
      <AppStyle>
        <SwitchToggle toggle={toggle} />
        <Profile />
        <Links />
        {/* <Slide /> */}
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
