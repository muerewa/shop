import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../index";
import { Dropdown, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { createDevice, fetchBrands, fetchTypes } from "../../http/DeviceApi";
import { observer } from "mobx-react-lite";

export const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);

  const [info, setInfo] = useState([]);

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name',name)
    formData.append('price',`${price}`)
    formData.append('img',file)
    formData.append('brandId',device.selectedBrand.id)
    formData.append('typeId',device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data => {onHide(); console.log(data)})
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

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
            <Dropdown.Toggle>
              {device.selectedType.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3 mb-2">
            <Dropdown.Toggle>
              {device.selectedBrand.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Введите название"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите цену"
            type="number"
          />
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
        </Form>
        <Button variant={"outline-dark"} onClick={addInfo}>
          Добавить свойство
        </Button>
        {info.map((i) => (
          <Row className="mt-4" key={i.id}>
            <Col md={4}>
              <Form.Control
                placeholder="Введите название"
                value={i.title}
                onChange={(e) => changeInfo("title", e.target.value, i.number)}
              />
            </Col>

            <Col md={4} l>
              <Form.Control
                placeholder="Введите описание"
                value={i.description}
                onChange={(e) => changeInfo("description", e.target.value, i.number)}
              />
            </Col>

            <Col md={4}>
              <Button
                variant={"outline-danger"}
                onClick={() => removeInfo(i.number)}
              >
                Удалить
              </Button>
            </Col>
          </Row>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={addDevice}>
          Добавить
        </Button>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
