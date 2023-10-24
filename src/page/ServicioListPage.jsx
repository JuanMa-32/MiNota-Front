import { useContext, useEffect, useState } from "react";
import { ServicioList } from "../components/servicio/ServicioList"
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { Paginator } from './../components/Paginator';
import { BajaModal } from './../components/servicio/BajaModal';
import { NovedadModal } from "../components/servicio/NovedadModal";



export const ServicioListPage = () => {
    const {getServicio,paginatorServicio}=useContext(UserContext)
    const { id, page } = useParams();
    useEffect(() => {
        getServicio(id,page)
      }, [ page,id])
      const url = '/servicio/listar'

      const [visibleBaja, setvisibleBaja] = useState(false);
      const [visibleNovedad, setvisibleBajaNovedad] = useState(false);
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
  return (
    <>    
    {!visibleBaja || <BajaModal handlerCloseFormBaja={handlerCloseFormBaja} idServicio={idServicio} ></BajaModal>}
{!visibleNovedad || <NovedadModal handlerCloseFormNovedad={handlerCloseFormNovedad} idServicio={idServicio}></NovedadModal> }
    
    <ServicioList handlerOpenFormBaja={handlerOpenFormBaja} handlerOpenFormNovedad={handlerOpenFormNovedad}></ServicioList>
    <Paginator id={id} url={url} paginator={paginatorServicio}></Paginator>
    </>
  )
}
