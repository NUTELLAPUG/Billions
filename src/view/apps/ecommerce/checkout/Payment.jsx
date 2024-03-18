import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import MaskedInput from 'antd-mask-input'

import { Row, Col, Button, Form, Input, Steps, Tag, Collapse } from "antd";
import { RiBankCard2Line, RiHandCoinLine, RiWallet3Line, RiArrowRightSLine, RiCheckFill, RiFileCopyLine } from "react-icons/ri";

import BreadCrumbs from '../../../../layout/components/content/breadcrumbs';
import Summary from './Summary';

const { Panel } = Collapse;
const { Step } = Steps;

export default function Payment(props) {
  const { totalItem, totalPrice } = props

  const genExtra = () => (
    <RiArrowRightSLine
      size={24}
      className="hp-collapse-arrow hp-text-color-black-60"
    />
  );

  const [bankValue1, setBankValue1] = useState()
  const [bankValue2, setBankValue2] = useState()

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
              <Steps size="small" current={2}>
                <Step title={
                  <Link to="/apps/ecommerce/checkout">
                    <span className="hp-text-color-black-80 hp-text-color-dark-30">Order Details</span>
                  </Link>

                } />
                <Step title={
                  <Link to="/apps/ecommerce/address-information">
                    <span className="hp-text-color-black-80 hp-text-color-dark-30">Address Informations</span>
                  </Link>
                }
                />
                <Step title={
                  <Link to="/apps/ecommerce/payment">
                    <span className="hp-text-color-black-100 hp-text-color-dark-0">Payment</span>
                  </Link>
                } />
              </Steps>
            </div>

            <div className="hp-p-sm-16 hp-p-24 hp-border-radius hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100">
              <h3 className="hp-mb-4 hp-text-color-black-80 hp-text-color-dark-0">Payment Options</h3>
              <p className="hp-mb-24 hp-p1-body hp-text-color-black-60 hp-text-color-dark-30">Be sure to click on correct payment option</p>

              <Collapse accordion defaultActiveKey={1}>
                <Panel
                  header={
                    <p className="hp-d-flex-center hp-p1-body hp-mb-0">
                      <RiBankCard2Line
                        size={24}
                        className="remix-icon hp-text-color-primary-1 hp-mr-18"
                      />

                      <span>Credit Card</span>

                      <Tag className="hp-ml-16" color="green">
                        Tag
                      </Tag>
                    </p>
                  }
                  key="1"
                  showArrow={false}
                  extra={genExtra()}
                >
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <span className="hp-font-weight-500 hp-mb-8 hp-d-block">Card Number:</span>
                      <MaskedInput mask="1111 1111 1111 1111" name="card" size="20" />
                    </Col>

                    <Col span={24}>
                      <span className="hp-font-weight-500 hp-mb-8 hp-d-block">Name on card:</span>
                      <Input />
                    </Col>

                    <Col md={12} span={24}>
                      <span className="hp-font-weight-500 hp-mb-8 hp-d-block">Expiration date (MM/YY):</span>
                      <MaskedInput mask="11/11" name="expiry" />
                    </Col>

                    <Col md={12} span={24}>
                      <span className="hp-font-weight-500 hp-mb-8 hp-d-block">CVC:</span>
                      <MaskedInput mask="111" name="cvc" />
                    </Col>

                    <Col span={24} className="hp-mt-16 hp-text-right">
                      <Button
                        type="primary"
                        icon={
                          <RiCheckFill className="hp-mr-8" />
                        }
                      >
                        Confirmed
                        </Button>
                    </Col>
                  </Row>
                </Panel>

                <Panel
                  header={
                    <p className="hp-d-flex-center hp-p1-body hp-mb-0">
                      <RiHandCoinLine
                        size={24}
                        className="remix-icon hp-text-color-primary-1 hp-mr-18"
                      />

                      <span>Pay Cash on Delivery</span>
                    </p>
                  }
                  key="2"
                  showArrow={false}
                  extra={genExtra()}
                >
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <span className="hp-font-weight-500 hp-mb-8 hp-d-block">A-BANK IBAN:</span>
                      <Input
                        onChange={(e) => setBankValue1(e.target.value)}
                        suffix={
                          <RiFileCopyLine
                            onClick={() => navigator.clipboard.writeText(bankValue1)}
                            className="hp-transition hp-hover-text-color-primary-3 hp-cursor-pointer remix-icon hp-text-color-primary-1"
                          />
                        } />
                    </Col>

                    <Col span={24}>
                      <span className="hp-font-weight-500 hp-mb-8 hp-d-block">B-BANK IBAN:</span>
                      <Input
                        onChange={(e) => setBankValue2(e.target.value)}
                        suffix={
                          <RiFileCopyLine
                            onClick={() => navigator.clipboard.writeText(bankValue2)}
                            className="hp-transition hp-hover-text-color-primary-3 hp-cursor-pointer remix-icon hp-text-color-primary-1"
                          />
                        } />
                    </Col>

                    <Col span={24}>
                      <p className="hp-badge-text hp-font-weight-500 hp-text-color-primary-1">Please  enter your username on description area .</p>
                    </Col>
                  </Row>
                </Panel>

                <Panel
                  header={
                    <p className="hp-d-flex-center hp-p1-body hp-mb-0">
                      <RiWallet3Line
                        size={24}
                        className="remix-icon hp-text-color-primary-1 hp-mr-18"
                      />

                      <span>Shopping Credit</span>

                      <Tag className="hp-ml-16" color="green">
                        Available
                      </Tag>
                    </p>
                  }
                  key="3"
                  showArrow={false}
                  extra={genExtra()}
                >
                  <Row gutter={[12, 12]} align="bottom">
                    <Col xxl={18} md={15} span={24}>
                      <span className="hp-font-weight-500 hp-mb-8 hp-d-block">Coupon Code:</span>
                      <Input placeholder="Please enter your coupon code" />
                    </Col>

                    <Col xxl={6} md={9} span={24}>
                      <Button type="primary" block>Submit Coupon</Button>
                    </Col>
                  </Row>
                </Panel>
              </Collapse>
            </div>
          </Col>

          <Summary
            totalItem={totalItem}
            totalPrice={totalPrice}
            content={true}
          />
        </Row>
      </Col>
    </Row >
  )
}