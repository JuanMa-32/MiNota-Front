export const servicioReducer = (state = [], action) => {

    switch (action.type) {
        case 'loadingServicio':
            return state.payload

        case 'addServicio':
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