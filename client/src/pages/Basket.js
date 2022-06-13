import React,{useContext, useEffect, useState} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import jwt_decode from "jwt-decode";
import {fetchBasket } from "../http/DeviceApi";
import { Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const Basket = observer(() => {
  const {user,device} = useContext(Context)
  useEffect( () => {
    const userId =  jwt_decode(user.token).id
    fetchBasket(userId).then(data => device.setBasket(data))
  },[])
  const history = useHistory();
  return (
    <div>
      {device.basket.map((basket) => (
           <Col
           md={3}
           className="mt-5"
           onClick={() => history.push(DEVICE_ROUTE + "/" + basket.id)}
           style={{ cursor: "pointer" }}
         >
           <Card style={{ width: 150, cursor: "poiner" }} border="light">
             <Image width={150} height={150} src={'http://localhost:3030/' + basket.img}></Image>
             <div className="text-black-50 d-flex justify-content-between align-items-center">
               <div>{basket.name}</div>
               <div>
                 <div>{basket.price}</div>
               </div>
             </div>
           </Card>
         </Col>
      ))}    
      </div>
    )
})

export default Basket