import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Row, Col, Form, Input, Button } from "antd";

import Background from "../background";
import Header from "../header";
import Footer from "../footer";

export default function SignUp() {
  const [stepEmail, setStepEmail] = useState(false)
  const [stepPassword, setStepPassword] = useState(false)
  const [stepPasswordConfirm, setStepPasswordConfirm] = useState(false)

  return (
    <Row className="hp-authentication-page hp-d-flex" style={{ flexDirection: "column" }}>
      <Background />

      <Col span={24}>
        <Header />
      </Col>

      <Col flex="1 0 0" className="hp-px-32">
        <Row className="hp-h-100 hp-m-auto" align="middle" style={{ maxWidth: 360 }}>
          <Col span={24}>
            <h1>Create Account</h1>

            <Form
              layout="vertical"
              name="basic"
              className="hp-mt-sm-16 hp-mt-32"
            >
              <Form.Item label="Username :">
                <Input id="error" />
              </Form.Item>

              {
                stepEmail && (
                  <>
                    <Form.Item label="E-mail :">
                      <Input id="validating" />
                    </Form.Item>

                    {stepPassword && (
                      <>
                        <Form.Item label="Password :">
                          <Input.Password id="password" />
                        </Form.Item>

                        {stepPasswordConfirm && (
                          <>
                            <Form.Item label="Confirm Password :">
                              <Input.Password id="confirm-password" />
                            </Form.Item>

                            <Form.Item className="hp-mt-16 hp-mb-0">
                              <Button block type="primary" htmlType="submit">
                                Sign up
                              </Button>
                            </Form.Item>
                          </>
                        )}
                      </>
                    )}
                  </>
                )
              }
            </Form>

            {
              !stepEmail ? (
                <Button block type="primary" onClick={() => setStepEmail(true)}>
                  Continue
                </Button>
              ) : (
                !stepPassword ? (
                  <Button block type="primary" onClick={() => setStepPassword(true)}>
                    Continue
                  </Button>
                ) : (
                  !stepPasswordConfirm && (
                    <Button block type="primary" onClick={() => setStepPasswordConfirm(true)}>
                      Continue
                    </Button>
                  )
                )
              )
            }

            <div className="hp-form-info hp-text-center hp-mt-8">
              <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-mr-4">
                Already have an account?
              </span>

              <Link
                to="/pages/authentication-modern/login"
                className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption"
              >
                Login
              </Link>
            </div>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};