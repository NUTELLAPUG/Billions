import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { removeFromCart, adjustItemQty, loadCurrentItem } from '../../../../redux/ecommerce/ecommerceActions';

import { Row, Col, InputNumber } from "antd";
import { RiCheckboxCircleFill } from "react-icons/ri";

export default function OrderProduct(props) {
  const { value, valueQty } = props
  const dispatch = useDispatch()

  // Qty
  const [input, setInput] = useState(value.qty);

  useEffect(() => {
  }, [input])

  const onChangeHandler = (e) => {
    setInput(e);
    dispatch(adjustItemQty(value.id, e))
  };

  // Price Split
  const discountSplit1 = value.discount.toString().split('.')[0];
  const discountSplit2 = value.discount.toString().split('.')[1];

  const priceSplit1 = value.price.toString().split('.')[0];
  const priceSplit2 = value.price.toString().split('.')[1];

  return (
    <Col span={24}>
      <div className="hp-p-sm-16 hp-p-24 hp-border-radius hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100">
        <Row align="middle" justify="space-between">
          <Col md={13} span={24}>
            <Row align="middle">
              <Col flex="0 0 135px" className="hp-ecommerce-app-checkout-item-img">
                <Link to={`/apps/ecommerce/product-detail/${value.id}`} onClick={() => dispatch(loadCurrentItem(value))}>
                  <img src={require(`../../../../assets/images/product/${value.imgList}`)} alt={value.title} />
                </Link>
              </Col>

              <Col flex="1 0 0" className="hp-ecommerce-app-checkout-text hp-mt-sm-16 hp-pl-sm-0 hp-pl-32">
                <h4 className="hp-mb-4">{value.title}</h4>

                <span className="hp-caption hp-d-block hp-text-color-black-60">
                  By
                  <span className="hp-ml-4 hp-text-color-black-80 hp-text-color-dark-40">{value.person}</span>
                </span>

                <p className="hp-mt-8 hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-60">
                  {value.checkoutText}
                </p>
              </Col>
            </Row>
          </Col>

          <Col md={11} span={24} className="hp-mt-sm-24 hp-ecommerce-app-checkout-info">
            <Row align="middle" justify="end">
              <Col>
                <InputNumber
                  min={1}
                  max={99}
                  value={valueQty}
                  onChange={onChangeHandler}
                />

                <div
                  className="hp-cursor-pointer hp-mt-4 hp-caption hp-text-color-black-60 hp-text-underline"
                  onClick={() => dispatch(removeFromCart(value.id))}
                >
                  Remove Item
                </div>
              </Col>

              <Col className="hp-text-right hp-ml-64">
                <div className="h2 hp-text-color-black-80 hp-text-color-dark-30">
                  {
                    value.discount ? (
                      <span>
                        {discountSplit1}.
                        <sup style={{ top: -6 }}>
                          {discountSplit2}
                        </sup>
                      </span>
                    ) : (
                      <span>
                        {priceSplit1}.
                        <sup style={{ top: -6 }}>
                          {priceSplit2}
                        </sup>
                      </span>
                    )
                  }
                </div>

                {
                  value.freeShipping && (
                    <div className="hp-d-flex-center hp-mt-4 hp-caption hp-font-weight-400 hp-text-color-success-1 hp-text-underline">
                      <RiCheckboxCircleFill className="hp-mr-4" />
                      Free Shipping
                    </div>
                  )
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Col>
  )
}