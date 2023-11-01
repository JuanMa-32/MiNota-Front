import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'

export const FormPublicacion = () => {

    const { publicacionInitial, hanlderAddPublicacion
        , handlerCloseForm, errors, publicacionSelected }
        = useContext(UserContext);//contexto


    const [publicacionForm, setpublicacionForm] = useState(publicacionInitial)//estado form
    const { titulo, cuerpo,id } = publicacionForm;

    useEffect(() => {
        setpublicacionForm({
            ...publicacionSelected
        })
    }, [publicacionSelected])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
       
        setpublicacionForm({
            ...publicacionForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        hanlderAddPublicacion(publicacionForm)
    }

    return (
        <form onSubmit={onSubmit}>
                 <input type="hidden" name="id" value={id} />
                 <label htmlFor="country" className="form-label-sm">Titulo</label>
            <input className='form-control  form-control-sm my-3 w-75' 
                name='titulo'
                value={titulo}
                onChange={onInputChange} // se dispara cuando el valor de un elemento de entrada (input) o de selección (select) ha cambiado. 
            />
            <p className='text-danger'>{errors?.titulo} </p>
            <div className="mb-6">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Texto</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"
                    name='cuerpo'
                    value={cuerpo}
                    onChange={onInputChange}
                ></textarea>
                <p className='text-danger'>{errors?.cuerpo} </p>
            </div>
            <button type='submit' className='btn btn-primary btn-sm '>
                Publicar
            </button>
            <button className='btn btn-light btn-sm ms-2' type='button' onClick={handlerCloseForm}>
                Cerrar
            </button>
        </form>
    )
}
