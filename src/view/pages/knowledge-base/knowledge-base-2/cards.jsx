import React from "react";

import { Row, Col, Card } from "antd";

export default function KnowledgeBaseCards() {
  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col xl={8} md={12} xs={24}>
        <Card className="hp-knowledge-basic-card">
          <h4>Call Center</h4>

          <p className="hp-mb-4">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </p>
          <p className="hp-mb-4">
            <a href="#">Lorem Ipsum Sit Amet</a>
          </p>
          <p className="hp-mb-4">
            <a href="#">Dolor Sit Amet</a>
          </p>
          <p className="hp-mb-4">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="hp-knowledge-basic-card">
          <h4>Shipping & Logistics</h4>

          <p className="hp-mb-4">
            <a href="#">Lorem Dolor Sit Amet</a>
          </p>
          <p className="hp-mb-4">
            <a href="#">Lorem Ipsum Dolor Amet</a>
          </p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="hp-knowledge-basic-card">
          <h4>Finance</h4>

          <p className="hp-mb-4">
            <a href="#">Dolor Sit Amet</a>
          </p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="hp-knowledge-basic-card">
          <h4>Charts</h4>

          <p className="hp-mb-4">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="hp-knowledge-basic-card">
          <h4>Mailings</h4>

          <p className="hp-mb-4">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </p>
          <p className="hp-mb-4">
            <a href="#">Sit Amet</a>
          </p>
          <p className="hp-mb-4">
            <a href="#">Lorem Ipsum Amet</a>
          </p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="hp-knowledge-basic-card">
          <h4>SEO & Ads</h4>

          <p className="hp-mb-4">
            <a href="#">Lorem Sit Amet</a>
          </p>
          <p className="hp-mb-4">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </p>
        </Card>
      </Col>

      <Col xl={8} md={12} xs={24}>
        <Card className="hp-knowledge-basic-card">
          <h4>Lorem Ipsum</h4>

          <p className="hp-mb-4">
            <a href="#">Lorem Ipsum Dolor Sit Amet</a>
          </p>
          <p className="hp-mb-4">
            <a href="#">Dolor Sit Amet</a>
          </p>
        </Card>
      </Col>
    </Row>
  );
}