const defaultState = {
    cash: 0
}

export function cashReducer(state = defaultState, {type, payload}) {
    switch(type){
        case "ADD_CASH":
            return {...state, cash: state.cash + payload}
        case "DEL_CASH":
            return {...state, cash: state.cash - payload}
        default: 
            return state
    }
}