import React from 'react'
import { Link } from 'react-router-dom';

import { Row, Col, Form, Input, Steps, Select } from "antd";

import BreadCrumbs from '../../../../layout/components/content/breadcrumbs';
import Summary from './Summary';

const { Step } = Steps;

export default function AddressInformation(props) {
  const { totalItem, totalPrice } = props

  return (
    <Row className="hp-ecommerce-app-checkout hp-mb-32">
      <Col className="hp-mb-32" span={24}>
        <Row gutter={[32, 32]}>
          <BreadCrumbs
            breadCrumbParent="Applications"
            breadCrumbParent2="E-Commerce"
            breadCrumbActive="Checkout"
          />
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Col lg={18} span={24}>
            <div className="hp-p-24 hp-border-radius hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100 hp-mb-32 hp-overflow-scroll hp-scrollbar-x-hidden">
              <Steps size="small" current={1}>
                <Step title={
                  <Link to="/apps/ecommerce/checkout">
                    <span className="hp-text-color-black-80 hp-text-color-dark-30">Order Details</span>
                  </Link>

                } />
                <Step title={
                  <Link to="/apps/ecommerce/address-information">
                    <span className="hp-text-color-black-100 hp-text-color-dark-0">Address Informations</span>
                  </Link>
                }
                />
                <Step title={
                  <Link to="#">
                    <span className="hp-text-color-black-60">Payment</span>
                  </Link>
                } />
              </Steps>
            </div>

            <div className="hp-p-sm-16 hp-p-24 hp-border-radius hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100 hp-bg-color-black-0">
              <h3 className="hp-mb-24 hp-text-color-black-80 hp-text-color-dark-0">Address</h3>

              <Form
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
              >
                <Row gutter={[16]}>
                  <Col md={12} span={24}>
                    <Form.Item
                      label="Full Name"
                      name="fullname"
                      rules={[
                        { required: true, message: "This area required" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col md={12} span={24}>
                    <Form.Item
                      label="Address Title"
                      name="address-title"
                      rules={[
                        { required: true, message: "This area required" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col md={12} span={24}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        { type: "email", required: true, message: "This area required" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col md={12} span={24}>
                    <Form.Item
                      label="Phone"
                      name="phone"
                      rules={[
                        { required: true, message: "This area required" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col md={12} span={24}>
                    <Form.Item
                      label="State"
                      name="state"
                      rules={[
                        { required: true, message: "This area required" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col md={12} span={24}>
                    <Form.Item label="Town/City">
                      <Select>
                        <Select.Option value="city-1">City 1</Select.Option>
                        <Select.Option value="city-2">City 2</Select.Option>
                        <Select.Option value="city-3">City 3</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item
                      label="Address"
                      name="address"
                      rules={[
                        { required: true, message: "This area required" },
                      ]}
                    >
                      <Input.TextArea />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>

          <Summary
            totalItem={totalItem}
            totalPrice={totalPrice}
            stepUrl='/apps/ecommerce/payment'
          />
        </Row>
      </Col>
    </Row >
  )
}