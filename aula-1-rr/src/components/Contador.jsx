import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/contador";
import { closeModal, openModal } from "./store/modal";

export const Contador = () => {
  const { contador } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Total: {contador.total}</h1>
      <button onClick={() => dispatch(incrementar())}>+</button>
      <button onClick={() => dispatch(reduzir())}>-</button>
      <br/>
      <button onClick={() => dispatch(openModal())}>Abrir</button>
      <button onClick={() => dispatch(closeModal())}>Fechar</button>
    </div>
  );
}