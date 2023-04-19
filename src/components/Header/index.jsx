import { Navbar } from "../Navbar";
import { header } from "../portfolio";

import "./Header.scss";
import Typography from "@mui/material/Typography";

export const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <Typography variant="h5">
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </Typography>
      <Navbar />
    </header>
  );
};
