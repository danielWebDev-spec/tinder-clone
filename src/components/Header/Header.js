import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="tinder"
        className="header__logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
