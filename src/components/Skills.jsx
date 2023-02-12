import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import skill1 from '../assets/html.png';
import skill2 from '../assets/css.png';
import skill3 from '../assets/js.png';
import skill4 from '../assets/bootstrap.png';
import skill5 from '../assets/react.png';
import skill6 from '../assets/node.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
              <p>
                The main languages and frameworks that I have learned and built
                different projects with them.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={skill1} alt="" />
                </div>
                <div className="item">
                  <img src={skill2} alt="" />
                </div>
                <div className="item">
                  <img src={skill3} alt="" />
                </div>
                <div className="item">
                  <img src={skill4} alt="" />
                </div>
                <div className="item">
                  <img src={skill5} alt="" />
                </div>
                <div className="item">
                  <img src={skill6} alt="" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
