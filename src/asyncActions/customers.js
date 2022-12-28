import { addMultCustomersAction } from "../store/customerReducer"

export const fetchCustomers = (dispatch) => {
    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addMultCustomersAction(json)))
    }
    return fetchPosts
}