import { Row, Col, Button } from "antd";

export default function LinksItem() {
  return (
    <Col span={24}>
      <Row gutter={[8, 8]} justify="center">
        <Col>
          <Button type="link" className="hp-text-color-black-0 hp-hover-text-color-primary-2 hp-py-8 hp-px-sm-12 hp-px-16">About Us</Button>
        </Col>

        <Col>
          <Button type="link" className="hp-text-color-black-0 hp-hover-text-color-primary-2 hp-py-8 hp-px-sm-12 hp-px-16">Contact</Button>
        </Col>

        <Col>
          <Button type="link" className="hp-text-color-black-0 hp-hover-text-color-primary-2 hp-py-8 hp-px-sm-12 hp-px-16">Help</Button>
        </Col>
      </Row>
    </Col>
  );
}