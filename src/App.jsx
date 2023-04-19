import { useContext } from "react";
import { ThemeContext } from "../theme";

import {
  About,
  Contact,
  Footer,
  Header,
  Projects,
  ScrollToTop,
  SideBar,
  Skills,
} from "./components";

import "./sass/App.scss";

export const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      {/* <SideBar /> */}
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};
