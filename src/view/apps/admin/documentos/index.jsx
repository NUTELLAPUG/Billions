import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";


export default function Usuarios() {
  // Redux
  const customise = useSelector(state => state.customise)
  const userData = useSelector((state) => state.userData.userData);
  
  return (
    <Row gutter={[64, 64]} className="hp-mb-32">
      <Col flex="1" className="hp-overflow-hidden">
      <Row gutter={[64, 64]}>

      <Col xl={24} span={24}>
        <Row gutter={[32, 32]}>
  
        hi
           
        </Row>
    </Col>

        </Row>
      </Col>
    </Row>
  );
}
