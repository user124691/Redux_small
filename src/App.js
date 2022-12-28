import "./styles.css"
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, deleteCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  function addCustomer(name){
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  function deleteCustomer(customId){
    dispatch(deleteCustomerAction(customId))
  }

  return (
    <div className={"App"}>
      <div style={{fontSize:"30px"}}>{cash}</div>
      <div className={"controllButtons"}>
        <button onClick={() => {dispatch({type: "ADD_CASH", payload: Number(prompt("Type your cash"))})}}>Add cash</button>
        <button onClick={() => {dispatch({type: "DEL_CASH", payload: Number(prompt("Type your cash"))})}}>Get cash</button>
        <button onClick={() => addCustomer(prompt("Type your name"))}>Add customer</button>
        <button onClick={() => dispatch(fetchCustomers(dispatch))}>Get customers from server</button>
      </div>
      {customers.length > 0 
      ? <div className={"customerList"}>{customers.map(function(customer){return <div onClick={() => deleteCustomer(customer.id)}>{customer.name}</div>})}</div> 
      : <div style={{fontSize:"22px"}}>No customer</div>}
    </div>
  );
}

export default App;
