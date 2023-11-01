import { useContext, useEffect, useState } from "react";
import { ServicioList } from "../components/servicio/ServicioList"
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { Paginator } from './../components/Paginator';
import { BajaModal } from './../components/servicio/BajaModal';
import { NovedadModal } from "../components/servicio/NovedadModal";
import { MesServicioModal } from "../components/servicio/MesServicioModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";



export const ServicioListPage = () => {
  const { getServicio, paginatorServicio, mes } = useContext(UserContext)
  const { id, page } = useParams();

  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();
  const mesNumero = fechaActual.getMonth() + 1;
  useEffect(() => {
    getServicio(id, page, mesNumero, anio)
  }, [page, id])
  const url = '/servicio/listar'

  const [visibleBaja, setvisibleBaja] = useState(false);
  const [visibleNovedad, setvisibleBajaNovedad] = useState(false);
  const [visibleMes, setvisibleMes] = useState(false);
  const [idServicio, setidServicio] = useState(0)
  const handlerOpenFormBaja = (idService) => {
    setidServicio(idService)
    setvisibleBaja(true);
  }
  const handlerCloseFormBaja = () => {
    setvisibleBaja(false)
  }
  const handlerOpenFormNovedad = (idService) => {
    setidServicio(idService)
    setvisibleBajaNovedad(true);
  }
  const handlerCloseFormNovedad = () => {
    setvisibleBajaNovedad(false)
  }
  const handlerOpenFormMes = () => {
    setvisibleMes(true);
  }
  const handlerCloseFormMes = () => {
    setvisibleMes(false)
  }






  return (
    <>
      {!visibleMes ||
        <MesServicioModal handlerCloseFormMes={handlerCloseFormMes} idEscuela={id} />}

      <div className="text-end mb-3">
        <button type="button" onClick={handlerOpenFormMes} className="btn btn-dark ">
          {mes}'23 <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
      </div>

      <h4>Servicios de {mes}</h4>

      {!visibleBaja ||
        <BajaModal handlerCloseFormBaja={handlerCloseFormBaja} idServicio={idServicio} />}

      {!visibleNovedad ||
        <NovedadModal handlerCloseFormNovedad={handlerCloseFormNovedad} idServicio={idServicio} />}

      <ServicioList handlerOpenFormBaja={handlerOpenFormBaja} handlerOpenFormNovedad={handlerOpenFormNovedad} />
      <Paginator id={id} url={url} paginator={paginatorServicio} />
    </>
  )
}
