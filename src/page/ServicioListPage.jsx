import { useContext, useEffect, useState } from "react";
import { ServicioList } from "../components/servicio/ServicioList"
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { Paginator } from './../components/Paginator';
import { BajaModal } from './../components/servicio/BajaModal';



export const ServicioListPage = () => {
    const {getServicio,paginatorServicio}=useContext(UserContext)
    const { id, page } = useParams();
    useEffect(() => {
        getServicio(id,page)
      }, [ page,id])
      const url = '/servicio/listar'

      const [visibleBaja, setvisibleBaja] = useState(false);
      const [idServicio, setidServicio] = useState(0)
      const handlerOpenFormBaja = (idService) => {
        setidServicio(idService)
        setvisibleBaja(true);
      }
      const handlerCloseFormBaja = () => {
        setvisibleBaja(false)
      }
  return (
    <>    
    {!visibleBaja || <BajaModal handlerCloseFormBaja={handlerCloseFormBaja} idServicio={idServicio} ></BajaModal>}
    <ServicioList handlerOpenFormBaja={handlerOpenFormBaja}></ServicioList>
    <Paginator id={id} url={url} paginator={paginatorServicio}></Paginator>
    </>
  )
}
