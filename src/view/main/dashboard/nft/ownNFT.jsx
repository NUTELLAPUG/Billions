import React from "react";

import { Row, Col, Button } from "antd";

import cardBg2 from "../../../../assets/images/dasboard/nft-card-bg-2.png";

export default function OwnNFT() {
  return (
    <div className="hp-position-relative hp-bg-primary-1 hp-p-32 hp-border-radius-xxl hp-card-1 hp-overflow-hidden">
      <div
        className="hp-position-absolute-top-left hp-w-100 hp-h-100 hp-nft-dashboard-own-nft-bg"
        style={{ backgroundImage: "url(" + cardBg2 + ")", backgroundSize: "cover", backgroundPosition: "center right" }}
      ></div>

      <Row align="middle" justify="space-between">
        <Col md={12} span={24}>
          <span className="h4 hp-text-color-black-0 hp-mb-10 hp-d-block">Create your own NFT</span>

          <p className="hp-p1-body hp-mb-0 hp-text-color-black-0">Discover limited-edition digital artwork Create, sell and collect your now!</p>
        </Col>

        <Col className="hp-mt-sm-24">
          <Button type="primary" className="hp-bg-black-0 hp-text-color-primary-1 hp-border-none">Learn Now</Button>
        </Col>
      </Row>
    </div>
  );
}