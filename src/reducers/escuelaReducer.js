export const escuelaReducer = (state = [], action) => {

    switch (action.type) {
        case 'addEscuela':
            return [
                ...state,
                {
                    ...action.payload,//el payload es el valor
                }
            ];

        case 'loadingEscuelas':
            return action.payload;

        case 'update':
            return state.map(e => {
                if (e.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return e;
            })

        default:
            state;
    }
}
