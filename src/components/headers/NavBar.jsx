import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const NavBar = () => {
  return (
    <header className="py-3 mb-3 border-bottom">
      <div className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: 'auto 1fr' }}>
        <div className="d-flex align-items-center">
          <div className="logo-container" style={{ maxWidth: '60px' }}>
            <img src="horizontal.png" alt="Logo de la empresa" style={{ width: '1250%' }} />
          </div>
        </div>
        <div className="d-flex justify-content-end">
        <FontAwesomeIcon icon={faUser} className="icon-spacing"/>
          <p>Juan Manuel Aguero </p>
        </div>
      </div>
    </header>

  )
}
