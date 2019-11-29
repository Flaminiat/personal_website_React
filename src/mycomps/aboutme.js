import React from "react";
import "./aboutme.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const AboutMe = () => {
  return (
    <article id="about" className="articles about">
      <h1 className="text-center about-me">ABOUT ME</h1>
      <div className="container">
        <div className="one-column">
          <ScrollAnimation
            animateIn="fadeInDownBig"
            isVisible={true}
            animatePreScrol={false}
          >
            <p className="paragr">
              An sincerity so extremity he additions. Her yet there truth merit.
              Mrs all projecting favourable now unpleasing. Son law garden
              chatty temper. Oh children provided to mr elegance marriage
              strongly. Off can admiration prosperous now devonshire diminution
              law.
            </p>

            <p className="paragr">
              Received overcame oh sensible so at an. Formed do change merely to
              county it. Am separate contempt domestic to to oh. On relation my
              so addition branched. Put hearing cottage she norland letters
              equally prepare too. Replied exposed savings he no viewing as up.
              Soon body add him hill. No father living really people estate if.
              Mistake do produce beloved demesne if am pursuit.
            </p>
            <p className="paragr">
              An sincerity so extremity he additions. Her yet there truth merit.
              Mrs all projecting favourable now unpleasing. Son law garden
              chatty temper. Oh children provided to mr elegance marriage
              strongly. Off can admiration prosperous now devonshire diminution
              law.
            </p>
          </ScrollAnimation>
        </div>

        <div className="one-column">
          <h2>GIS - ArcMap</h2>
          <progress value="90" max="100"></progress>
          <h2>GIS - QGis</h2>
          <progress value="80" max="100"></progress>
          <h2>Javascript</h2>
          <progress value="50" max="100"></progress>
          <h2>HTML Coding</h2>
          <progress value="50" max="100"></progress>
          <h2>React</h2>
          <progress value="10" max="100"></progress>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
