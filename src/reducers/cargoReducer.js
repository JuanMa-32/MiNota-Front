

export const cargoReducer = (state = [], action) => {

    switch (action.type) {
        case 'loadingCargos':
            return action.payload.content

        case 'addCargo':
            return [
                ...state,
                {
                    ...action.payload,//el payload es el valor
                }
            ];
        case 'updateCargo':
            return state.map(p => {
                if (p.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return p;
            })
            case 'RemoveCargo':
                return state.filter(cargo=>cargo.id !== action.payload)
                
        default:
            state;
    }
}
