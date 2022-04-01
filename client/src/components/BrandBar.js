import React from "react";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Row, Card } from "react-bootstrap";
import { Context } from "../index";

export const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "white"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});
