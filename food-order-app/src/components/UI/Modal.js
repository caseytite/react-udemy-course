import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop} />;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlay = document.getElementById("overlays");

const Modal = (props) => {
  const { closeCartHandler } = props;
  return (
    <>
      {createPortal(<Backdrop onClick={closeCartHandler} />, overlay)}
      {createPortal(<Overlay>{props.children}</Overlay>, overlay)}
    </>
  );
};

export default Modal;
