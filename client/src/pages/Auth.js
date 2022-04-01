import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { REG_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { registration, login } from "../http/userApi";
import { observer } from "mobx-react-lite";
import {Context} from '../index'

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const history = useHistory()
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const Auth = async () => {
    try {
      let data
      if (isLogin) {
        const data = await login(email,pass);
      } else {
        const data = await registration(email,pass);
        }
        user.setUser(user)
        user.setIsAuth(true)
        history.push(MAIN_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }

  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-4"
            placeholder="Введите email..."
            value={email}
            onChange ={e => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-4"
            placeholder="Введите пароль..."
            value={pass}
            onChange={e => setPass(e.target.value)}
            type='password'
          />
          <Row className="d-flex justify-content-between mt-3 pr-3 pl-3">
            <NavLink to={isLogin ? REG_ROUTE : LOGIN_ROUTE}>
              {isLogin ? "Еще нет аккаунта?" : "Уже есть аккаунт?"}
            </NavLink>
            <Button variant={"outline-success"} onClick={Auth}>
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
})

export default Auth;
