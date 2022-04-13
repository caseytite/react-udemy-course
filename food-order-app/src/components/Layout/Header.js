import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  const { showCartHandler } = props;
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCartHandler={showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src="./images/meals.jpeg" alt="header" />
      </div>
    </>
  );
};

export default Header;
