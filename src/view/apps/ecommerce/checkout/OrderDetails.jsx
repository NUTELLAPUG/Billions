import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Row, Col, Steps, Empty, Button } from "antd";

import BreadCrumbs from '../../../../layout/components/content/breadcrumbs';
import OrderProduct from './OrderProduct';
import Summary from './Summary';

import EmptyImage from '../../../../assets/images/apps/ecommerce/checkout-empty.svg';

const { Step } = Steps;

export default function OrderDetails(props) {
  const { totalItem, totalPrice } = props
  const cart = useSelector(state => state.ecommerce.cart)

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
            {
              cart.length !== 0 && (
                <>
                  <div className="hp-p-24 hp-border-radius hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100 hp-mb-32 hp-overflow-scroll hp-scrollbar-x-hidden">
                    <Steps size="small" current={0}>
                      <Step title={
                        <Link to="/apps/ecommerce/checkout">
                          <span className="hp-text-color-black-100 hp-text-color-dark-0">Order Details</span>
                        </Link>

                      } />
                      <Step title={
                        <Link to="#">
                          <span className="hp-text-color-black-60">Address Informations</span>
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

                  <Row className="hp-mb-16 hp-pr-24 hp-ecommerce-app-checkout-title-table" style={{ paddingLeft: 190 }}>
                    <Col flex="1 0 0">
                      <span className="hp-d-block h5 hp-text-color-black-80 hp-text-color-dark-30">Name</span>
                    </Col>

                    <Col flex="0 0 205px">
                      <span className="hp-d-block h5 hp-text-color-black-80 hp-text-color-dark-30">Quantity</span>
                    </Col>

                    <Col className="hp-text-right">
                      <span className="hp-d-block h5 hp-text-color-black-80 hp-text-color-dark-30">Price</span>
                    </Col>
                  </Row>
                </>
              )
            }

            <Row gutter={[32, 32]}>
              {
                cart.length !== 0 && (
                  cart.map((value) => (
                    <OrderProduct key={value.id} value={value} valueQty={value.qty} />
                  ))
                )
              }
            </Row>
          </Col>

          {
            cart.length !== 0 ? (
              <Summary
                totalItem={totalItem}
                totalPrice={totalPrice}
                stepUrl='/apps/ecommerce/address-information'
              />
            ) : (
              <Col span={24}>
                <Empty
                  className="hp-mt-32"
                  image={EmptyImage}
                  imageStyle={{
                    height: 160,
                  }}
                  description={
                    <h5>Your bag is empty</h5>
                  }
                >
                  <Button type="primary">
                    <Link to="/apps/ecommerce/shop">Go to shop list</Link>
                  </Button>
                </Empty>
              </Col>
            )
          }
        </Row>
      </Col>
    </Row>
  )
}