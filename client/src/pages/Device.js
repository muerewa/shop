import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Image, Button, Card} from "react-bootstrap";
import { fetchOneDevice } from "../http/DeviceApi";

const Device = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image width={300} height={200} src={'http://localhost:3030/' + device.img}></Image>
        </Col>
        <Col md={4}>
          <Row >
            <h2 className="p-auto">{device.name}</h2>
            <div className="d-flex align-items-center justify-content-center p-auto">
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card style={{height: 300}} className='d-flex flex-column align-items-center justify-content-around'>
            <h3>{device.price}</h3>
            <Button variant="outline-dark">Добавить в корзину</Button>
          </Card>
          </Col>
      </Row>
    </Container>
  );
};

export default Device;
