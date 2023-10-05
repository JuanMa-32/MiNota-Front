import { useContext, useEffect } from "react";
import { ServicioList } from "../components/servicio/ServicioList"
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { Paginator } from './../components/Paginator';


export const ServicioListPage = () => {
    const {getServicio,paginatorServicio}=useContext(UserContext)
    const { id, page } = useParams();
    useEffect(() => {
        getServicio(id,page)
      }, [ page,id])
      const url = '/servicio/listar'
  return (
    <>    
    <ServicioList></ServicioList>
    <Paginator id={id} url={url} paginator={paginatorServicio} ></Paginator>
    </>
  )
}
