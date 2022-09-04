import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = 0;

const reducer = (state, action) => {
  if(action.type==="increament"){return state+1};
  if(action.type==="decreament"){return state-1};

};

function APP() {
  const [state, dispatch] = useReducer(reducer, initialTodos);

  return (
    <>
      <p>{state}</p>
      <button onClick={()=>{dispatch(type:"increament")}}>inc</button>
      <button onClick={()=>{dispatch(type:"decreament")}}>dec</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<APP />);