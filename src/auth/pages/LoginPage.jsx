import { useContext, useState } from "react";
import { AuthContext } from './../context/AuthContext';
import Swal from "sweetalert2";

const initialLoginForm = {
    email: '',
    password: '',
}
export const LoginPage = () => {

    const { handlerLogin } = useContext(AuthContext);

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { email, password } = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            Swal.fire('Error de validacion', 'Username y password requeridos', 'error');
        }

        // aca implementamos el login
        handlerLogin({ email, password });

        setLoginForm(initialLoginForm);
    }
    return (

        <body className="d-flex align-items-center py-4 bg-body-tertiary">
            <main className="form-signin m-auto text-center">
                <form onSubmit={onSubmit}>
                    <img src="public/logo.png" alt="Logo de la compañía" width="100" height="100" />
                    <p className="h3 mb-3 fw-normal">Por favor, introducir tu usuario y contraseña</p>

                    <div className="form-floating">
                        <input type="email" className="form-control"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            placeholder="name@example.com" />
                        <label for="floatingInput">Email </label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control mt-3"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            placeholder="Password" />
                        <label for="floatingPassword">Contraseña</label>
                    </div>


                    <button className="btn btn-primary w-100 py-2 mt-3 mb-3 " type="submit">Ingresar</button>
                    <p className="mt-5 mb-3 text-body-secondary">Juan Manuel Agüero</p>
                </form>
            </main>
        </body>
    );

}