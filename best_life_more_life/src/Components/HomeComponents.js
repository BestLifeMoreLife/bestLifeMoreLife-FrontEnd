import React from "react";

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
        <div className="photo-text">New Entry</div>
      ) : (
        <div className="photo-text">Listen</div>
      );
    let slide;

    return (
      <div className="news-container">
        <img src={slides[index]} alt="" className="homeImage" />
        {text}
        <div class="ui buttons">
          <button
            class="ui icon left labeled button"
            role="button"
            onClick={this.previousImage}
          >
            <i aria-hidden="true" class="left chevron icon" />Back
          </button>

          <button
            class="ui icon right labeled button"
            role="button"
            onClick={this.nextImage}
          >
            <i aria-hidden="true" class="right chevron icon" />Forward
          </button>
        </div>
      </div>
    );
  }
}

export default HomeComponents;
