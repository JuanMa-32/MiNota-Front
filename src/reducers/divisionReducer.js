

export const divisionReducer = (state = [], action) => {

    switch (action.type) {
        case 'loadingDivisiones':

            return action.payload

        case 'addDivision':
            return [
                ...state,
                {
                    ...action.payload,//el payload es el valor
                }
            ];

        case 'updateDivision':

            return state.map(u => {

                if (u.id === action.payload.id) {
                    return {
                        ...action.payload,

                    };
                }
                return u;
            })

            case 'RemoveDivision':
            return state.filter(division=>division.id !== action.payload)
            

        default:
            state;
    }
}
