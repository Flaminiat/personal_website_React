import React from "react";
import "./aboutme.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Portfolio = () => {
  return (
    <article id="portfolio" className="articles portfolio">
      <h1 className="text-center about-me">PORTFOLIO - SELECTED PROJECTS</h1>
      <div className="container">
        <div>
          <ScrollAnimation
            animateIn="fadeInDownBig"
            isVisible={true}
            animatePreScrol={false}
          >
            <Row>
              <Col>
                <p className="paragr">
                  Maps for the joint flash report of Caritas Italiana &
                  Legambiente on poverty and social exclusion. The report was
                  released in November 2019. My maps are at page 22.
                  <br></br>
                  <Button
                    className="info mt-4"
                    onClick={() =>
                      window.open(
                        "http://s2ew.caritasitaliana.it/materiali/studi_ricerche/flash_report_2019/Flash_Report_Caritas_Italiana_2019.pdf",
                        "_blank"
                      )
                    }
                  >
                    click me to go to the PDF version
                  </Button>
                </p>
              </Col>
              <Col>
                <p className="paragr">
                  Georeferenciation of project location in various countries
                  during post-emergency response of cyclone Idai (March 2019)
                  and creation of maps on country interventions financed by
                  Caritas Italiana.
                  <br></br>
                  <Button
                    className="info mt-4"
                    onClick={() =>
                      window.open(
                        "https://www.caritas.it/home_page/attivita_/00006787_Zimbabwe.html",
                        "_blank"
                      )
                    }
                  >
                    click me to go to the Zimbabwe page
                  </Button>
                </p>
              </Col>
              <Col>
                <p className="paragr">
                  Chat app - Project on the creation of a chat app using React
                  on the front end, with NodeJS + Socket.io web socket library
                  on the back end, deployed on Heroku and Netlify.
                  <br></br>
                  <Button
                    className="info mt-4"
                    onClick={() =>
                      window.open(
                        "https://5dca8a7657c147d937bbe2d3--clever-aryabhata-6d246f.netlify.com/",
                        "_blank"
                      )
                    }
                  >
                    click me to go to the chat app
                  </Button>
                </p>
              </Col>
            </Row>
          </ScrollAnimation>
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
