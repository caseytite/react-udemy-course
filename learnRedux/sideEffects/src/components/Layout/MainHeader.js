import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { uiActions } from "../../store";
import { useDispatch } from "react-redux";

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={toggleCartHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
