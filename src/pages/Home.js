import React, { Component } from "react";
import InstaWidget from "../components/InstaWidget";
import Header from "../components/Header";
import TextImage from "../components/TextImage";
import { connect } from "react-redux";
import Card from "../components/Card";
import processVideo from "../media/videos/Countdown.mp4";
import shoes from "../media/shoe.jpg";
import video from "../media/video.jpg";
import data from "../data.js";

class Home extends Component {
  state = {
    recentWorks: data.pages.find((p) => p.title === "Selected artworks"),
    about: data.pages.find((p) => p.title === "About"),
    process: data.pages.find((p) => p.title === "Process"),
    contact: data.pages.find((p) => p.title === "Contact"),
    gallery: data.pages.find((p) => p.title === "Gallery"),
  };
  componentDidMount() {}
  render() {
    return (
      <div className="">
        <Header />
        {/* {this.props.headerImageLoaded ? ( */}
        <div>
          {/* <Fade bottom> */}
          <TextImage
            image={this.state.recentWorks.teaserImage.url}
            alt={this.state.recentWorks.teaserImage.alt}
            text={this.state.recentWorks.teaserText}
            src="/artworks"
            title={this.state.recentWorks.title}
            imagePosition="left"
            buttonText="See artworks"
          />
          <div className="u-block  u-hidden@lg">
            <TextImage
              text={this.state.process.teaserText}
              src="/process"
              title={"Process"}
              videoUrl={processVideo}
              imagePosition="right"
              buttonText="Go to gallery"
            />
          </div>
          <div className="u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
            <div className="o-grid  o-grid--fixed  u-width--100  u-z--1">
              <div className="o-grid__row  u-flex  u-flex  u-flex--column  u-flex--items--center">
                {/* <div className="o-grid__col  o-grid__col--12@xs  u-margin--b4  u-margin--b6@md  u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  v-rectangle--middle">
                  Get in touch and more!
                </div> */}
                <h2 className="u-margin--b5  u-margin--b6@xl  u-size--6  u-size--5@md  u-size--4@lg  u-weight--600  u-lh--2  v-rectangle--middle">
                  Get in touch and more!
                </h2>
              </div>
              <div className="o-grid__row  u-flex">
                <div className="o-grid__col  u-hidden  o-grid__col--4@lg  u-block@lg">
                  <Card
                    image={shoes}
                    title={this.state.process.title}
                    url="/process"
                    videoUrl={processVideo}
                    buttonText="Watch the process"
                    teaserText={this.state.process.teaserText}
                  />
                </div>
                <div className="o-grid__col  o-grid__col--6@xs  o-grid__col--4@lg">
                  <Card
                    image={video}
                    title={this.state.contact.title}
                    url="/contact"
                    buttonText="Get in touch"
                    teaserText={this.state.contact.teaserText}
                  />
                </div>
                <div className="o-grid__col  o-grid__col--6@xs  o-grid__col--4@lg">
                  <Card
                    image={shoes}
                    title={this.state.about.title}
                    url="/about"
                    buttonText="Read more"
                    teaserText={this.state.about.teaserText}
                  />
                </div>
              </div>
            </div>
          </div>
          <TextImage
            image={this.state.recentWorks.teaserImage.url}
            alt={this.state.recentWorks.teaserImage.alt}
            text={this.state.gallery.teaserText}
            title="Gallery"
            imagePosition="left"
            src="/gallery"
            buttonText="Go to gallery"
          />
          <div className="u-padding--y5  u-padding--y7@sm  u-padding--y8@lg">
            <InstaWidget />
          </div>
          {/* </Fade> */}
        </div>
        {/* ) : null} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    headerImageLoaded: state.headerImageLoaded,
  };
};

export default connect(mapStateToProps, {})(Home);
