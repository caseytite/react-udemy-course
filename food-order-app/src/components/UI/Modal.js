import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = ({ closeCartHandler }) => {
  return <div onClick={closeCartHandler} className={classes.backdrop} />;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlay = document.getElementById("overlays");

const Modal = ({ closeCartHandler, children }) => {
  return (
    <>
      {createPortal(<Backdrop onClick={closeCartHandler} />, overlay)}
      {createPortal(<Overlay>{children}</Overlay>, overlay)}
    </>
  );
};

export default Modal;
