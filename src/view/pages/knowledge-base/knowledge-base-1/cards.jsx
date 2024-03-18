import React from "react";

import { Row, Col, Card } from "antd";

import Callcenter from "../../../../assets/images/pages/knowledgebase/contact.png";
import Charts from "../../../../assets/images/pages/knowledgebase/analyse.png";
import Logistic from "../../../../assets/images/pages/knowledgebase/location.png";
import Mailing from "../../../../assets/images/pages/knowledgebase/newsletter.png";
import Finance from "../../../../assets/images/pages/knowledgebase/save-money.png";
import Seo from "../../../../assets/images/pages/knowledgebase/seo.png";

export default function KnowledgeBaseCards() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col xl={8} md={12} xs={24}>
        <Card className="hp-text-center">
          <img src={Callcenter} alt="Call Center" />
          <h4>Call Center</h4>
          <p className="hp-p1-body hp-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="hp-text-center">
          <img src={Logistic} alt="Shipping & Logistics" />
          <h4>Shipping & Logistics</h4>
          <p className="hp-p1-body hp-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="hp-text-center">
          <img src={Finance} alt="Finance" />
          <h4>Finance</h4>
          <p className="hp-p1-body hp-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="hp-text-center">
          <img src={Charts} alt="Charts" />
          <h4>Charts</h4>
          <p className="hp-p1-body hp-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="hp-text-center">
          <img src={Mailing} alt="Mailings" />
          <h4>Mailings</h4>
          <p className="hp-p1-body hp-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="hp-text-center">
          <img src={Seo} alt="SEO & Ads" />
          <h4>SEO & Ads</h4>
          <p className="hp-p1-body hp-mb-0">Lorem Ipsum Dolor Sit Amet</p>
        </Card>
      </Col>
    </Row>
  );
}