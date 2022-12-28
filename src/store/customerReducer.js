const defaultState = {
    customers: []
}

const ACTIONS = {
    ADD_MULT_CUSTOMERS: "ADD_MULT_CUSTOMERS",
    ADD_CUSTOMER: "ADD_CUSTOMER",
    DELETE_CUSTOMER: "DELETE_CUSTOMER"    
}

export function customerReducer(state = defaultState, {type, payload}) {
    switch(type){
        case ACTIONS.ADD_MULT_CUSTOMERS:
            return {...state, customers: [...state.customers, ...payload]}
        case ACTIONS.ADD_CUSTOMER:
            return {...state, customers: [...state.customers, payload]}
        case ACTIONS.DELETE_CUSTOMER:
            return {...state, customers: state.customers.filter(function(customer){
                if(customer.id !== payload){
                    return customer
                }
            })}
        default: 
            return state
    }
}

export const addCustomerAction = (payload) => ({type: ACTIONS.ADD_CUSTOMER, payload})
export const addMultCustomersAction = (payload) => ({type: ACTIONS.ADD_MULT_CUSTOMERS, payload})
export const deleteCustomerAction = (payload) => ({type: ACTIONS.DELETE_CUSTOMER, payload})