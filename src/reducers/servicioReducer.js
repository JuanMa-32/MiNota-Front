export const servicioReducer = (state = [], action) => {

    switch (action.type) {
        case 'loadingServicio':
            return action.payload.content

        case 'addServicio':
            return [
                ...state,
                {
                    ...action.payload,//el payload es el valor
                }
            ];

            case 'updateServicio':
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