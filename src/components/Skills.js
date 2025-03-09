import meter40 from "../assets/img/meter40.svg";
import meter45 from "../assets/img/meter45.svg";
import meter50 from "../assets/img/meter50.svg";
import meter55 from "../assets/img/meter55.svg";
import meter60 from "../assets/img/meter60.svg";
import meter65 from "../assets/img/meter65.svg";
import meter70 from "../assets/img/meter70.svg";
import meter75 from "../assets/img/meter75.svg";
import meter80 from "../assets/img/meter80.svg";
import meter85 from "../assets/img/meter85.svg";
import meter90 from "../assets/img/meter90.svg";
import meter95 from "../assets/img/meter95.svg";
import meter100 from "../assets/img/meter100.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className="container">
                J'aime toucher à tout dans le développement web, mais j'ai un
                petit faible pour le back-end ! J'adore résoudre des défis
                techniques et apprendre sans cesse de nouvelles choses pour
                enrichir mes compétences.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter100} alt="Image" />
                  <h5>HTML/CSS</h5>
                </div>
                <div className="item">
                  <img src={meter70} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter70} alt="Image" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={meter75} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter65} alt="Image" />
                  <h5>VueJS</h5>
                </div>
                <div className="item">
                  <img src={meter100} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter100} alt="Image" />
                  <h5>Bulma</h5>
                </div>
                <div className="item">
                  <img src={meter55} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter80} alt="Image" />
                  <h5>Vite</h5>
                </div>
                <div className="item">
                  <img src={meter100} alt="Image" />
                  <h5>CMS</h5>
                </div>
                <div className="item">
                  <img src={meter90} alt="Image" />
                  <h5>Adobe Illustrator</h5>
                </div>
                <div className="item">
                  <img src={meter85} alt="Image" />
                  <h5>Adobe Photoshop</h5>
                </div>
                <div className="item">
                  <img src={meter100} alt="Image" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={meter100} alt="Image" />
                  <h5>Canva</h5>
                </div>
                <div className="item">
                  <img src={meter100} alt="Image" />
                  <h5>Notion</h5>
                </div>
                <div className="item">
                  <img src={meter80} alt="Image" />
                  <h5>Zoho CRM</h5>
                </div>
                <div className="item">
                  <img src={meter50} alt="Image" />
                  <h5>UML</h5>
                </div>
                <div className="item">
                  <img src={meter75} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter45} alt="Image" />
                  <h5>PostrgreSql</h5>
                </div>
                <div className="item">
                  <img src={meter45} alt="Image" />
                  <h5>Symfony</h5>
                </div>
                <div className="item">
                  <img src={meter45} alt="Image" />
                  <h5>Docker</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
