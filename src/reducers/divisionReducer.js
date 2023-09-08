

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

        default:
            state;
    }
}
