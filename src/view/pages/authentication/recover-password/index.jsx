import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Form, Input, Button } from "antd";

import LeftContent from "../leftContent";
import Footer from "../footer";

export default function RecoverPassword() {
  return (
    <Row gutter={[32, 0]} className="hp-authentication-page">
      <LeftContent />

      <Col lg={12} span={24} className="hp-py-sm-0 hp-py-md-64">
        <Row className="hp-h-100" align="middle" justify="center">
          <Col
            xxl={11}
            xl={15}
            lg={20}
            md={20}
            sm={24}
            className="hp-px-sm-8 hp-pt-24 hp-pb-48"
          >
            <h1 className="hp-mb-sm-0">Recuperar contraseña</h1>
            <p className="hp-mt-sm-0 hp-mt-8 hp-text-color-black-60">
             
            </p>

            <Form
              layout="vertical"
              name="basic"
              className="hp-mt-sm-16 hp-mt-32"
            >
              <Form.Item label="E-mail :">
                <Input id="validating" placeholder="you@example.com" />
              </Form.Item>

              <Form.Item className="hp-mt-16 hp-mb-8">
                <Button block type="primary" htmlType="submit">
                  <Link to="/pages/authentication/reset-password">Reset Password</Link>
                </Button>
              </Form.Item>
            </Form>

            <div className="hp-form-info hp-text-center">
              <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-mr-4">
                Go back to
              </span>

              <Link
                to="/pages/authentication/login"
                className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption"
              >
                Login
              </Link>
            </div>

            <Footer />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
