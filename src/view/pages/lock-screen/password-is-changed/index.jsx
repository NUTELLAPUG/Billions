import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Button } from "antd";
import { RiArrowRightSLine } from "react-icons/ri";

import bg from "../../../../assets/images/pages/lock-screen/lock-pattern.svg";
import logo from "../../../../assets/images/logo/logo-vector-large.svg";
import LinksItem from "../links";

export default function PasswordIsChanged() {
  return (
    <Row align="top" justify="center" className="hp-lock-screen hp-bg-color-primary-1 hp-bg-color-dark-100 hp-d-flex-center">
      <div
        className="hp-screen-bg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <Row gutter={[32, 0]} className="hp-lock-screen-row hp-text-center hp-border-radius hp-overflow-hidden hp-pt-64 hp-pb-18">
        <Col span={24} className="hp-mb-48">
          <img src={logo} alt="Logo" />
        </Col>

        <Col span={24} className="hp-mb-120">
          <h3 className="hp-text-color-black-0 hp-mb-24">Password is changed 🔑</h3>

          <p className="hp-p1-body hp-text-color-black-0 hp-mb-32">Your password is successfully changed. Please sign in to your account and start a new project.</p>

          <Link to="/pages/authentication/login">
            <Button
              icon={<RiArrowRightSLine className="hp-text-color-primary-1 hp-mr-8" size={16} />}
              className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-border-color-black-0 hp-border-color-dark-90 hp-hover-bg-color-black-30 hp-hover-bg-color-dark-90"
            >
              Sign in
            </Button>
          </Link>

          <p className="hp-p1-body hp-text-color-black-0 hp-mt-16 hp-mb-0">Didn't receive an email? Try again</p>
        </Col>

        <LinksItem />
      </Row>
    </Row>
  );
}
