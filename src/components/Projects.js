import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "The Shroomed Alien",
      description: "P5 Play video-game",
      imgUrl: projImg1,
      url :"https://ycherkaoui.esd-monsite.fr/projet_video_games//",
      category: "Coding",
    },
    {
      title: "Tapas & Co",
      description: "Php - SQL project",
      imgUrl: projImg2,
      url : "https://ycherkaoui.esd-monsite.fr/Tapas_&_Co/",
      category: "Coding",
    },
    {
      title: "Porsche Boutique",
      description: "Php - SQL project",
      imgUrl: projImg3,
      url : " https://ycherkaoui.esd-monsite.fr/Boutique/",
      category: "Coding",
    },
    {
      title: "MicroCars society",
      description: "Design UI - Figma",
      imgUrl: projImg4,
      category: "Web Design",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
  <Row>
    <Col size={12}>
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Projects</h2>
            <p>Découvrez mes projets de développement, où je mets en pratique mes compétences en programmation et création d'applications interactives. Du développement de jeux vidéo à des applications complexes, chaque projet reflète ma passion pour le codage.</p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Coding</Nav.Link>
                  
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Web Design UI/UX</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                {/* Tab 1: Coding Projects */}
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects
                      .filter(project => project.category === "Coding") // Affiche uniquement les projets de développement
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>

                {/* Tab 2: Web Design Projects */}
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects
                      .filter(project => project.category === "Web Design") // Affiche uniquement les projets de design web
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        )}
      </TrackVisibility>
    </Col>
  </Row>
</Container>

    </section>
  )
}