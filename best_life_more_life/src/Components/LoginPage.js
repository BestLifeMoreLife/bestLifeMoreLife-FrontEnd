import React from "react";
import sadKidCudi from "../assets/sadKidCudi.jpg";
import sadBreezy from "../assets/sadBreezy.jpg";
import chris from "../assets/chris.jpg";
import emWallpaper from "../assets/emWallpaper.jpg";
import Kanye from "../assets/Kanye.jpg";
import Cudi from "../assets/Cudi.jpeg";
import ChrisBrown from "../assets/ChrisBrown.jpg";
import BackgroundImage from "./BackgroundImage";
import BurgerButton from "./BurgerButton";
import { slide as Menu } from "react-burger-menu";
const em = "http://wallpapersdsc.net/wp-content/uploads/2015/11/10120.jpg";

const LoginPage = () => {
  return (
    <div className="grid-container">
      <BackgroundImage pic={em} />
      <div className="row">
        <a href="http://localhost:3000/api/v1/login">
          <button>Log In</button>
        </a>
      </div>
    </div>
  );
};
{
  /*<div className="row">
    <a href="http://localhost:3000/api/v1/login">
      <button>Log In</button>
    </a>
  </div>
    */
}
export default LoginPage;
