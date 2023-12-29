import { useReducer } from "react"
import Swal from "sweetalert2"

import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { loginReducer } from './../reducers/loginReducer';

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}
export const useAuth = () => {
    const [login, dispatch] = useReducer(loginReducer, initialLogin)
    const navigate =useNavigate()

    const handlerLogin = async ({ email, password }) => {
        
        try {
            const response = await loginUser({ email, password });
          
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));
          
            const user = { email: claims.sub }
            console.log(user);
            dispatch({
                type: 'login',
                payload: {user, isAdmin: claims.isAdmin},
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user,
            }));

            sessionStorage.setItem('token', `Bearer ${token}`);
            console.log(login);
          navigate('/')
        } catch (error) {
            if (error.response?.status == 401) {
                Swal.fire('Error Login', 'Username o password invalidos', 'error');
            } else if (error.response?.status == 403) {
                Swal.fire('Error Login', 'No tiene acceso al recurso o permisos!', 'error');
            } else {
                throw error;
            }
        }
    }


    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        });
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear();
    }
    return {
   login,
   handlerLogin,
   handlerLogout
    }
}