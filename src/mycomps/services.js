import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Services = () => {
  return (
    <div className="animated fadeInDown">
      <article id="services" className="articles services py-8 pb-4">
        <h1 data-animate="fadeInDown" className="text-center services">
          SERVICES
        </h1>

        <div className="container">
          <ScrollAnimation
            animateIn="fadeInDownBig"
            isVisible={true}
            animatePreScrol={false}
          >
            <div className="one-column">
              <h2>GIS - ArcMap/QGis</h2>
              <p className="paragr">
                I can use both ArcMap and QGis. My specialty is spatial analysis 
                of poverty and vulnerability to disaster patterns, I am proficient in using models 
                to create indexes and analyze  their spatial distribution.
              </p>
            </div>
            <div className="one-column">
              <h2>Javascript and HTML coding</h2>
              <p className="paragr">
                 I am quite new but I master well these coding languages. I can easily create landing pages
                 with interactive features.
              </p>
            </div>
            <div className="one-column">
              <h2>React</h2>
              <p className="paragr">Please check-out my GitHub account.</p>
            </div>
          </ScrollAnimation>
        </div>
      </article>
    </div>
  );
};

export default Services;
