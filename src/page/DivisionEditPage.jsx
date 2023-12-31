import React, { useContext, useEffect } from 'react'
import { DivisionEdit } from '../components/division/DivisionEdit'
import { UserContext } from '../context/UserContext'
import { useParams } from 'react-router-dom'

export const DivisionEditPage = () => {

  const { hanlderDivisionSelected } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    hanlderDivisionSelected(id)
  }, [id])
  const idEscuela = sessionStorage.getItem('idEscuela');
  return (
    <div>
      <DivisionEdit idEscuela={idEscuela}></DivisionEdit>
    </div>
  )
}
