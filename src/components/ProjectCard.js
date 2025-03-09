import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url, category }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {/* Lien vers le projet */}
      <a href={url} target="_blank" rel="noopener noreferrer" className="proj-link">
        <div className="proj-imgbx">
          {/* Image du projet avec alt */}
          <img src={imgUrl} alt={`Image de ${title}`} />
          <div className="proj-txtx">
            {/* Titre du projet */}
            <h4>{title}</h4>
            {/* Catégorie du projet */}
            <p className="category">{category}</p>
            {/* Description du projet */}
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
