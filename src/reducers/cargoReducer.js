import React from 'react'

export const cargoReducer = (state = [],action) => {
 
    switch (action.type) {
        case 'loadingCargos':
            return action.payload

        case 'addCargo':
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
