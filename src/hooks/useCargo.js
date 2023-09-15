import { useReducer } from "react";
import { cargoReducer } from './../reducers/cargoReducer';
import { save } from './../services/cargoService';

const cargoFormInit = {
    motivo:'',
    fundamento:'',
    carrera:'',
    materia:'',
    regimen:'',
    condicionCargo:'',
    turno:'',
    resolucionCreacion:'',
    codigoJunta:''
};

export const useCargo = () => {
  const [cargos, dispatch] = useReducer(cargoReducer,[])

  const handlerAddCargo = async (id,cargo) => {
    try {
        const response = await save(id,cargo);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
  } 
  
    return {
        //funciones

        //variables
    }
}
