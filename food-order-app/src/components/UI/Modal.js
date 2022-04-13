import ReactDom from "react-dom";
import classes from "./Modal.module.css";

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
      {ReactDom.createPortal(<Backdrop onClick={closeCartHandler} />, overlay)}
      {ReactDom.createPortal(<Overlay>{props.children}</Overlay>, overlay)}
    </>
  );
};

export default Modal;
