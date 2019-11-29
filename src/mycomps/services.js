import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Services = () => {
  return (
    <div className="animated fadeInDown">
      <article id="services" className="articles services py-8">
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
                An sincerity so extremity he additions. Her yet there truth
                merit. Mrs all projecting favourable now unpleasing. Son law
                garden chatty temper. Oh children provided to mr elegance
                marriage strongly. Off can admiration prosperous now devonshire
                diminution law.
              </p>
            </div>
            <div className="one-column">
              <h2>Javascript and HTML coding</h2>
              <p className="paragr">
                An sincerity so extremity he additions. Her yet there truth
                merit. Mrs all projecting favourable now unpleasing. Son law
                garden chatty temper. Oh children provided to mr elegance
                marriage strongly. Off can admiration prosperous now devonshire
                diminution law.
              </p>
            </div>
            <div className="one-column">
              <h2>React</h2>
              <p className="paragr">
                Received overcame oh sensible so at an. Formed do change merely
                to county it. Am separate contempt domestic to to oh. On
                relation my so addition branched. Put hearing cottage she
                norland letters equally prepare too. Replied exposed savings he
                no viewing as up. Soon body add him hill. No father living
                really people estate if. Mistake do produce beloved demesne if
                am pursuit.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </article>
    </div>
  );
};

export default Services;
