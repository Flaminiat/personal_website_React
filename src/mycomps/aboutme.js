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
              I am passionate about social justice and equality. I care for the
              environment and I would like to contribute to leave a better
              planet than the one I found. I am always eager to take on new
              challenges and find creative ways to solve old and new problems. I
              love to feed my mobile soul seeing and experiencing new places, no
              difference whether it's going to be close-by or far-away.
            </p>

            <p className="paragr">
              I just completed a full-stack developer course with CODE YOUR
              FUTURE, a London-based start-up that teaches coding. I enrolled in
              this course to become knowledgeble in coding and familiar with
              Javascript and other web languages to complete my skills as a
              mapper (I can use both ArcMap and QGis).
            </p>
            <p className="paragr">
              Before getting into coding I spent the great majority of my
              professional life working for no-profit organizations. I performed
              several tasks such as general administrative support, program
              management, writing and editing of reports, articles, production
              of content for the website and for other communication purposes.
            </p>
          </ScrollAnimation>
        </div>
        <h2 className="text-center mb-5">SOME OF MY SKILLS</h2>
        <div className="one-column">
          <h2>GIS - ArcMap</h2>
          <progress value="90" max="100"></progress>
          <h2>GIS - QGis</h2>
          <progress value="80" max="100"></progress>
          <h2>Javascript</h2>
          <progress value="70" max="100"></progress>
          <h2>HTML Coding</h2>
          <progress value="70" max="100"></progress>
          <h2>React</h2>
          <progress value="40" max="100"></progress>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
