import { useState } from "react";
import classes from "./Auth.module.css";
import { authActions } from "../store/index";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth.isAuthenticated);

  const handleAuthenticate = (e, credentials) => {
    e.preventDefault();
    dispatch(authActions.login(credentials));
  };
  const [state, setState] = useState({ email: "", password: "" });
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={(e) => handleAuthenticate(e, state)}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              value={state.email}
              onChange={(e) => {
                setState((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              type="email"
              id="email"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              value={state.password}
              onChange={(e) => {
                setState((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
              type="password"
              id="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
