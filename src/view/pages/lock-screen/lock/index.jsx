import React from "react";

import { Row, Col, Input, Button, Tag } from "antd";
import { User } from "react-iconly";
import { RiSettings3Line } from "react-icons/ri";

import bg from "../../../../assets/images/pages/lock-screen/lock-pattern.svg";
import logo from "../../../../assets/images/logo/logo-vector.svg";
import avatar from "../../../../assets/images/memoji/memoji-2.svg";

export default function Lock() {
  return (
    <Row justify="center" className="hp-lock-screen hp-bg-color-primary-1 hp-bg-color-dark-100 hp-d-flex-center">
      <div
        className="hp-screen-bg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <Col span={24}>
        <div className="hp-mb-sm-32 hp-mb-64 hp-text-center">
          <img src={logo} alt="Logo" />
        </div>

        <Row gutter={[32, 0]} justify="center" className="hp-lock-screen-row hp-m-auto hp-text-center hp-border-radius hp-overflow-hidden hp-pt-42 hp-pb-64 hp-px-sm-8 hp-px-24">
          <Col span={24}>
            <img src={avatar} alt="Avatar" />
          </Col>

          <Col span={24} className="hp-mt-12">
            <Tag
              className="hp-d-inline-flex hp-align-items-center hp-mr-0"
              icon={<User className="remix-icon" size={12} />}
              color="error"
            >
              Locked
          </Tag>
          </Col>

          <Col span={24} className="hp-mt-24">
            <h3 className="hp-text-color-black-0 hp-mb-0">Edward Yıldırım</h3>
            <a href="mailto:edward@Hypeople.com" className="hp-p1-body hp-text-color-black-0 hp-mb-0">edward@Hypeople.com</a>
          </Col>

          <Col lg={22} span={24} className="hp-mt-32">
            <Input size="large" prefix={<User set="curved" className="remix-icon" size={16} />} addonAfter={<RiSettings3Line className="remix-icon" />} placeholder="Enter your pin" />
          </Col>

          <Col span={24} className="hp-mt-18">
            <Button type="link" className="hp-text-color-black-60 hp-hover-text-color-primary-2">
              I forgot my pin
            </Button>
          </Col>

          <Col span={24} className="hp-mt-8">
            <Button type="link" className="hp-text-color-black-60 hp-hover-text-color-primary-2">
              Sign-in options
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}