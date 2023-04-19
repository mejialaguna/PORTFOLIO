import { useContext, useState } from "react";

import { Grid, List, ListItem, ListItemButton, Button } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { Brightness2, CloseOutlined } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../../../theme";

import { projects } from "../portfolio";

import "./Navbar.scss";

export const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  const sectionList = ["Projects", "Skills", "Contact"];

  return (
    <Grid container justifyContent={"end"}>
      <Grid item>
        <List
          // sx={{ display: "flex" }}
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          {projects?.length &&
            sectionList?.map((section) => (
              <ListItem key={section} className="nav__list-item" disablePadding>
                <ListItemButton
                  href={`#${section.toLowerCase()}`}
                  onClick={toggleNavList}
                  className="link link--nav"
                >
                  {section}
                </ListItemButton>
              </ListItem>
            ))}

          <Button
            type="button"
            onClick={toggleTheme}
            className="btn btn--icon nav__theme"
            aria-label="toggle theme"
            disableRipple
          >
            {themeName === "dark" ? <LightModeIcon /> : <Brightness2 />}
          </Button>
        </List>
      </Grid>

      <Button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseOutlined /> : <MenuIcon />} hello world
      </Button>
    </Grid>
  );
};
