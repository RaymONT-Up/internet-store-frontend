import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/consts";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import styles from "./FormLogin.module.scss";
const FormLogin = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Card className={styles.card}>
      <h2 className={styles.title}>
        {isLogin ? "Авторизация" : "Регистрация"}
      </h2>
      <form className={styles.form}>
        <Input
          placeholder="Введите email"
          className={styles.input}
          required
          min="4"
          type="email"
        />
        <Input
          placeholder="Введите пароль"
          className={styles.input}
          required
          type="password"
          min="4"
        />
        <Button className={styles.button} type="submit">
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </Button>
        <p className={styles.paragraph}>
          {isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}
          {isLogin ? (
            <Link className={styles.paragraph__link} to={REGISTRATION_ROUTE}>
              Регистрация!
            </Link>
          ) : (
            <Link className={styles.paragraph__link} to={LOGIN_ROUTE}>
              Войти!
            </Link>
          )}
        </p>
      </form>
    </Card>
  );
};

export default FormLogin;
