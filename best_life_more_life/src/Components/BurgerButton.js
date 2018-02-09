import React from "react";
import { Link } from "react-router-dom";
import { pushRotate as Menu } from "react-burger-menu";

class BurgerButton extends React.Component {
  state = {
    isOpen: false
  };
  showSettings(event) {
    event.preventDefault();
  }

  isMenuOpen = () => {
    let newState = !this.state.isOpen;
    this.setState(
      {
        isOpen: newState
      },
      () => console.log(this.state.isOpen)
    );
  };

  render() {
    let styles = {
      bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        left: "36px",
        top: "36px"
      },
      bmBurgerBars: {
        background: "#373a47",
        color: "white"
      },
      bmCrossButton: {
        height: "24px",
        width: "24px"
      },
      bmCross: {
        background: "#bdc3c7"
      },
      bmMenu: {
        background: "#373a47",
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em"
      },
      bmMorphShape: {
        fill: "#373a47"
      },
      bmItemList: {
        color: "#b8b7ad",
        padding: "0.8em"
      },
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)"
      }
    };
    return (
      <div className="grid-login">
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          onStateChange={this.isMenuOpen}
          styles={styles}
          width={"15%"}
          left
        >
          <main>
            <Link to="/login">
              <a id="login" className="menu-item">
                Home
              </a>
            </Link>
            <br />
            <a id="about" className="menu-item" href="/about">
              About
            </a>
            <br />

            <a id="contact" className="menu-item" href="/contact">
              Contact
            </a>
            <br />

            <a onClick={this.showSettings} className="menu-item--small" href="">
              Settings
            </a>
          </main>
        </Menu>
      </div>
    );
  }
}

export default BurgerButton;
