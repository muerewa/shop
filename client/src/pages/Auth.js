import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Auth = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-4"
            placeholder="Введите email..."
          />
          <Form.Control
            className="mt-4"
            placeholder="Введите пароль..."
          />
          <Button variant="outline-success" className="mt-3 align-self-end">Войти</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
