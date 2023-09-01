export const escuelaReducer = (state = [],action) => {

    switch (action.type) {
        case 'addEscuela':
            return [
                ...state,
                {
                    ...action.payload,//el payload es el valor
                }
            ];
    
        default:
            state;
    }
}
