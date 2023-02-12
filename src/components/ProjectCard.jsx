import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <a href={link}>
            <h4>{title}</h4>
            <span>{description}</span>
          </a>
        </div>
      </div>
    </Col>
  );
};
