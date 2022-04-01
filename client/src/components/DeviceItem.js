import React from "react";
import { Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

export const DeviceItem = ({ device }) => {
  const history = useHistory();
  return (
    <Col
      md={3}
      className="mt-5"
      onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
      style={{ cursor: "pointer" }}
    >
      <Card style={{ width: 150, cursor: "poiner" }} border="light">
        <Image width={150} height={150} src={device.img}></Image>
        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div>{device.name}</div>
          <div>
            <div>{device.rating}</div>
          </div>
        </div>
      </Card>
    </Col>
  );
};
