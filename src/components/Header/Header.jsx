import React from "react";
import { useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import Logo from "../UI/Logo/Logo";
import styles from "./Header.module.scss";

const Header = () => {
  const user = useSelector(store => store.user);
  return (
    <header className={styles.header}>
      <Container className={styles.header__inner}>
        <Logo />
        {user.isAuth ? (
          <nav>
            <Button className={styles.button}>Админ</Button>
            <Button className={styles.button}>Выйти</Button>
          </nav>
        ) : (
          <nav>
            <Button className={styles.button}>Авторизация</Button>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
