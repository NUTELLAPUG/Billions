import React from "react";

import { useSelector } from "react-redux";

import { Card, Row, Col, Button } from "antd";

import cardBg from "../../../../assets/images/dasboard/ecommerce-card-bg.png";
import cardBgDark from "../../../../assets/images/dasboard/ecommerce-card-bg-dark.png";
import cardImg from "../../../../assets/images/dasboard/ecommerce-card-img.png";

export default function CheckDetailCard() {
  // Redux
  const theme = useSelector(state => state.customise.theme)

  return (
    <Card
      className="hp-border-color-black-40 hp-ecommerce-detail-card hp-card-6 hp-overflow-hidden"
      style={{
        backgroundImage: `url(${theme == "light" ? cardBg : cardBgDark})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row>
        <Col span={15}>
          <h2 className="hp-mb-0">New VR-07</h2>
          <span className="hp-p1-body hp-d-block hp-text-color-black-60 hp-text-color-dark-50">
            By Google
          </span>

          <Button
            type="primary"
            ghost
            className="hp-mt-16"
          >
            Check Detail
          </Button>
        </Col>

        <img src={cardImg} alt="New VR-07" />
      </Row>
    </Card>
  );
}
