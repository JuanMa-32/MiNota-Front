import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { UserContext } from './../context/UserContext';

export const PublicacionView = ({ publicacion }) => {

  const { handlerUserSelectedForm } = useContext(UserContext)

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h6 className="accordion-title">{publicacion.fechaDePublicacion} {publicacion.titulo}</h6>
        <button className={`accordion-btn ${isExpanded ? 'expanded' : ''}`}>
          +
        </button>
      </div>
      {isExpanded && (
        <div className="accordion-content">
          <p className="block-paragraph">{publicacion.titulo}</p>
          <p>{publicacion.cuerpo}</p>
          <p className="block-paragraph">Saludos cordiales.</p>
          <div className="add-comment">
            <button className="btn btn-link"  onClick={() => handlerUserSelectedForm(publicacion)}>
              <FontAwesomeIcon icon={faPencilAlt} />
              Editar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
