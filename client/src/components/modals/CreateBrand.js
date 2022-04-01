import React, { useState }from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createBrand } from "../../http/DeviceApi";

export const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addBrand = () => {
      createBrand({name: value}).then(data => {
          setValue('')
          onHide()
      })
  }
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form value={value} onChange={e => setValue(e.target.value)}>
          <Form.Control placeholder={"Введите название бренда"} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={addBrand}>
          Добавить
        </Button>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
