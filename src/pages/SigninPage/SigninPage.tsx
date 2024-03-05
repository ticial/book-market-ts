import React, { useEffect, useState } from "react";
import { DEFAUL_USER_ICON } from "api/authApi";
import { useLocation, useNavigate } from "react-router-dom";
import Panel from "components/ui/Panel/Panel";
import Button from "components/ui/Button/Button";
import styles from "./SigninPage.module.css";
import userStore from "store/userStore";
import { observer } from "mobx-react-lite";

const SigninPage = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { user, signin } = userStore;
  const lengthCheck = username.length >= 4 && username.length <= 16;

  const signinHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (lengthCheck) {
      signin(username);
    }
  };

  const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  useEffect(() => {
    if (user) {
      navigate(location.state?.from || "/"); // go to previous page
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="centered">
      <Panel className="p-5 rounded-3xl">
        <form className={styles.form} action="">
          <h1 className={styles.title}>Sign In</h1>
          <img
            className={styles.userpic}
            src={DEFAUL_USER_ICON}
            alt="userimage"
          />
          <div className="flex flex-col items-center justify-center w-full gap-1">
            <label htmlFor="username" className="font-medium text-lg">
              Username
            </label>
            <input
              className={styles.input}
              placeholder="Enter username"
              name="username"
              type="text"
              onChange={handleInputUsername}
              value={username}
            />
          </div>
          <Button
            type="submit"
            disabled={!lengthCheck}
            rounded="full"
            className="w-full "
            onClick={signinHandle}>
            Signin
          </Button>
        </form>
      </Panel>
    </div>
  );
});

export default SigninPage;
