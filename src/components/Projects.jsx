import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/project1.png';
import projImg2 from '../assets/project2.png';
import projImg3 from '../assets/project3.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Landing Page',
      description: 'Hi tea',
      imgUrl: projImg1,
      link: 'https://pennyjiang925.github.io/Landing-Page/',
    },
    {
      title: 'Home Page',
      description: 'Coffee Lab',
      imgUrl: projImg2,
      link: 'https://pennyjiang925.github.io/Lab-Coffee/',
    },
    {
      title: 'To-Do App',
      description: 'Todoist',
      imgUrl: projImg3,
      link: 'https://penny-todo.netlify.app/',
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Built innovative websites with React, JavaScript, HTML/CSS,
                    Node.js.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                className="projectImg"
                                key={index}
                                {...project}
                              />
                            );
                          })}
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
  );
};
