import React from "react";
import { Link } from "react-router-dom";

class HomeComponents extends React.Component {
  state = {
    images: [
      "http://static.djbooth.net/pics-features/rect/kanye-writing-book-hip-hop.jpg",
      "http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/01/kanye-west-singer-rapper-musician.jpg"
    ],
    activeImage: 0
  };

  componentDidMount = () => {
    this.autoSlide();
  };

  nextImage = () => {
    console.log("next");
    let newIndex = this.state.activeImage + 1;

    if (this.state.activeImage < this.state.images.length - 1) {
      this.setState({
        activeImage: newIndex
      });
    } else {
      this.setState({
        activeImage: 0
      });
    }
  };
  previousImage = () => {
    console.log("previous");

    if (this.state.activeImage > 0) {
      let newIndex = this.state.activeImage - 1;
      this.setState({
        activeImage: newIndex
      });
    }
  };

  autoSlide = () => {
    setInterval(() => {
      this.nextImage();
    }, 3000);
  };
  render() {
    let slides = this.state.images;
    let index = this.state.activeImage;
    let text =
      this.state.activeImage === 0 ? (
        <Link to="/journal">
          <div className="photo-text">Open Journal</div>
        </Link>
      ) : (
        <div className="photo-text">Listen</div>
      );
    let slide =
      this.state.activeImage === 0 ? (
        <Link to="/journal">
          <img src={slides[index]} alt="" className="homeImage" />
        </Link>
      ) : (
        <img src={slides[index]} alt="" className="homeImage" />
      );

    return (
      <div className="news-container">
        {slide}
        {text}
        <div className="ui buttons">
          <button
            className="ui icon left labeled button"
            onClick={this.previousImage}
          >
            <i aria-hidden="true" className="left chevron icon" />Back
          </button>

          <button
            className="ui icon right labeled button"
            onClick={this.nextImage}
          >
            <i aria-hidden="true" className="right chevron icon" />Forward
          </button>
        </div>
      </div>
    );
  }
}

export default HomeComponents;
