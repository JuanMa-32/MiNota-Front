export const usuarioReducer = (state = [], action) => {
    switch (action.type) {
        case 'loadingAlumnos':
            return action.payload;

        case 'addAlumno':
            return [
                ...state,
                {
                    ...action.payload,
                }
            ];

            case 'updateAlumno':
                return state.map(p => {
                    if (p.id === action.payload.id) {
                        return {
                            ...action.payload
                        };
                    }
                    return p;
                })
        default:
            state;
    }
}