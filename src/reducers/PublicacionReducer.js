export const PublicacionReducer = (state = [], action) => {

    switch (action.type) {
        case 'loadingPublicaciones':
            return action.payload

        case 'addPublicacion':
            return [
                ...state,
                {
                    ...action.payload,//el payload es el valor
                }
            ];

        case 'updatePublicacion':
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