export const usuarioReducer = (state = [],action) => {
    switch (action.type) {
        case 'loadingUsuarios':
            return action.payload;
    
        default:
            state;
    }
}