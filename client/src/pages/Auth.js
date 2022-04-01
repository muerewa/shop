import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { REG_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { NavLink, useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-4" placeholder="Введите email..." />
          <Form.Control className="mt-4" placeholder="Введите пароль..." />
          <Row className="d-flex justify-content-between mt-3 pr-3 pl-3">
            <NavLink to={isLogin ? REG_ROUTE : LOGIN_ROUTE}>
              {isLogin ? "Еще нет аккаунта?" : "Уже есть аккаунт?"}
            </NavLink>
            <Button variant={"outline-success"}>
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
