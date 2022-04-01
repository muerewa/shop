import React, { useContext, useState } from "react";
import { Context } from "../../index";
import { Dropdown, Row, Col, Button, Form, Modal } from "react-bootstrap";

export const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  };
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить девайс
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3 mb-2">
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3 mb-2">
            <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
              <Form.Control className="mt-3" placeholder="Введите название" />
              <Form.Control
                className="mt-3"
                placeholder="Введите цену"
                type="number"
              />
              <Form.Control className="mt-3" type="file" />
            </Dropdown.Menu>
          </Dropdown>
        </Form>
        <Button variant={"outline-dark"} onClick={addInfo}>
          Добавить свойство
        </Button>
        {info.map(i => (
          <Row className="mt-4" key={i.id}>
            <Col md={4}>
              <Form.Control placeholder="Введите название" />
            </Col>

            <Col md={4} l>
              <Form.Control placeholder="Введите описание" />
            </Col>

            <Col md={4} >
              <Button variant={'outline-danger'} onClick={()=>removeInfo(i.number)}>Удалить</Button>
            </Col>
          </Row>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
