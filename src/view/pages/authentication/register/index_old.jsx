import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Form, Input, Button } from "antd";

import LeftContent from "../leftContent";
import Footer from "../footer";

export default function SignUp() {
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
            <span className="hp-d-block hp-p1-body hp-text-color-dark-0 hp-text-color-black-100 hp-font-weight-500 hp-mb-6">SIGN UP FOR FREE</span>
            <h1>Create Account</h1>
            <p className="hp-mt-8 hp-text-color-black-60">
              Please sign up to your personal account if you want to use all our
              premium products.
            </p>

            <Form
              layout="vertical"
              name="basic"
              className="hp-mt-sm-16 hp-mt-32"
            >
              <Form.Item label="Username :">
                <Input id="error" />
              </Form.Item>

              <Form.Item label="E-mail :">
                <Input id="validating" />
              </Form.Item>

              <Form.Item label="Password :">
                <Input.Password id="password" />
              </Form.Item>

              <Form.Item label="Confirm Password :">
                <Input.Password id="confirm-password" />
              </Form.Item>

              <Form.Item className="hp-mt-16 hp-mb-8">
                <Button block type="primary" htmlType="submit">
                  Sign up
                </Button>
              </Form.Item>
            </Form>

            <div className="hp-form-info hp-text-center">
              <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-mr-4">
                Already have an account?
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
};