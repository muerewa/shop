import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { Context } from "../index";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REG_ROUTE,
} from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={MAIN_ROUTE} style={{ color: "white" }}>
          Главная
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"}>Корзина</Button>
            <Button
              variant={"outline-light"}
              className="ms-4"
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Выйти
            </Button>
            <Button
              variant={"outline-light"}
              className="ms-4"
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(REG_ROUTE)}
              className="ms-4"
            >
              Регистрация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
