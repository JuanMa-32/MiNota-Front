export const usuarioReducer = (state = [],action) => {
    switch (action.type) {
        case 'loadingAlumnos':
            return action.payload;
    
        default:
            state;
    }
}