import React from "react";
import { Col, Container, Row, Image, Button, Card} from "react-bootstrap";

const Device = () => {
  const device = {
    id: 1,
    name: "12 pro",
    price: 1000,
    rating: 5,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.m6D8SD2JgunNE9PGYjO0-QHaHa%26pid%3DApi&f=1",
  };
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image width={300} height={200} src={device.img}></Image>
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
