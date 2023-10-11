import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const disptach = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="tbn-container">
          <button
            className="btn confirm-btn"
            type="button"
            onClick={() => {
              disptach(clearCart());
              disptach(closeModal());
            }}
          >
            confirm
          </button>
          <button
            className="btn clear-btn"
            type="button"
            onClick={() => {
              disptach(closeModal());
            }}
          >
            close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
