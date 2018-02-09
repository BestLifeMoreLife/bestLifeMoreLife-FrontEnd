import React from "react";

const chrisBrown =
  "https://www.billboard.com/files/stylus/110126-chris_brown_617_409.jpg";
const kanye =
  "https://hdwallsource.com/img/2017/4/kanye-west-rapper-wallpaper-59576-61363-hd-wallpapers.jpg";
const cudi =
  "https://static.highsnobiety.com/wp-content/uploads/2016/12/16102132/kid-cudi-passoin-pain-demon-slayin-stream-00.jpg";
const em = "http://wallpapersdsc.net/wp-content/uploads/2015/11/10120.jpg";

class BackgroundImage extends React.Component {
  state = {
    allPics: [em, chrisBrown, kanye, cudi],
    background: this.props.pic,
    i: 0
  };

  // componentDidMount() {
  //   this.changeBackground();
  // }

  changeBackground = () => {
    var i = 0;

    setInterval(
      function() {
        if (i === 3) {
          i = 0;
        }

        i++;
        this.setState({
          background: this.state.allPics[i]
        });
        console.log(i);
      }.bind(this),
      5000
    );
  };
  render() {
    console.log("test", this.state.background);
    return (
      <div className="background">
        <img className="slide" src={this.state.background} alt="" />
      </div>
    );
  }
}

export default BackgroundImage;
