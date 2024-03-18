import React from 'react'
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart, addToWish, adjustItemQty, loadCurrentItem, removeFromWishlist } from '../../../../redux/ecommerce/ecommerceActions';

import { Row, Col, Button, Card, Tag, Rate, InputNumber } from "antd";
import { RiHeartFill, RiShoppingBagLine } from "react-icons/ri";

export default function ProductLarge(props) {
  const { value } = props;
  const dispatch = useDispatch()

  // Qty
  const onChangeHandler = (e) => {
    dispatch(adjustItemQty(value.id, e))
  };

  return (
    <Col span={24}>
      <Card className="hp-border-color-black-40 hp-mb-32 hp-eCommerceCardOne hp-eCommerceCardOne-large">
        <Row gutter={32}>
          <Col md={10} span={24} className="hp-mb-md-24">
            <Row justify="space-between" align="top">
              {
                value.featured && (
                  <Tag className="hp-border-none hp-py-4 hp-font-weight-500" color="blue">
                    Featured
                  </Tag>
                )
              }

              {
                value.onSale && (
                  <Tag className="hp-border-none hp-py-4 hp-font-weight-500" color="red">
                    On Sale
                  </Tag>
                )
              }

              {
                value.new && (
                  <Tag className="hp-border-none hp-py-4 hp-font-weight-500" color="green">
                    New
                  </Tag>
                )
              }

              {
                value.sponsored && (
                  <Tag className="hp-border-none hp-py-4 hp-font-weight-500" color="yellow">
                    Sponsored
                  </Tag>
                )
              }

              {
                value.wishCheck ? (
                  <div
                    className='hp-wish-button hp-cursor-pointer hp-border-radius-round remix-icon hp-p-8 hp-rate hp-text-color-danger-1 hp-bg-color-danger-4 hp-bg-color-dark-danger'
                    onClick={() => dispatch(removeFromWishlist(value.id))}
                  >
                    <RiHeartFill />
                  </div>
                ) : (
                  <div
                    className='hp-wish-button hp-cursor-pointer hp-border-radius-round remix-icon hp-p-8 hp-rate hp-text-color-black-40 hp-text-color-dark-70 hp-bg-color-black-10 hp-bg-color-dark-90'
                    onClick={() => dispatch(addToWish(value.id, value))}
                  >
                    <RiHeartFill />
                  </div>
                )
              }
            </Row>

            {
              value.imgList && (
                <Col className="hp-text-center">
                  <Link to={`/apps/ecommerce/product-detail/${value.id}`} onClick={() => dispatch(loadCurrentItem(value))}>
                    <img src={require(`../../../../assets/images/product/${value.imgList}`)} alt={value.title} height={156} />
                  </Link>
                </Col>
              )
            }
          </Col>

          <Col md={14} span={24}>
            {
              value.rate && (
                <Rate defaultValue={parseFloat(value.rate)} allowHalf></Rate>
              )
            }

            <div className="hp-my-8">
              {
                value.title && (
                  <h4 className="hp-mb-4">
                    {value.title}
                  </h4>
                )
              }

              {
                value.person && (
                  <p className="hp-caption hp-mb-0 hp-text-color-black-60">
                    By <span className="hp-text-color-black-80 hp-text-color-dark-30">  {value.person}</span>
                  </p>
                )
              }
            </div>

            {
              value.largeText && (
                <p className="hp-mb-0 hp-p1-body hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                  {value.largeText}
                </p>
              )
            }

            <Row align="middle" className="hp-my-8">
              {
                value.discount ? (
                  <p className="hp-mb-0 hp-mr-4 hp-text-color-black-60 hp-text-line-through hp-input-description">
                    ${value.price}
                  </p>
                ) : (
                  <p className="hp-mb-0 hp-text-color-primary-1 hp-font-weight-500">
                    ${value.price}
                  </p>
                )
              }

              {
                value.discount && (
                  <p className="hp-mb-0 hp-text-color-primary-1 hp-font-weight-500">
                    ${value.discount}
                  </p>
                )
              }
            </Row>

            <Row gutter={[8, 8]}>
              {
                value.detailBtn && (
                  <Col
                    xl={10} span={24}
                    className="hp-mt-xs-8"
                  >
                    <Link to={`/apps/ecommerce/product-detail/${value.id}`} onClick={() => dispatch(loadCurrentItem(value))}>
                      <Button className="hp-mr-8 hp-text-color-black-60 hp-hover-text-color-primary-1 hp-hover-text-color-dark-primary-2" block>
                        Check Detail
                      </Button>
                    </Link>
                  </Col>
                )
              }

              {
                !value.addToCartCheck ? (
                  value.basketBtn && (
                    <Col xl={10} span={24}>
                      <Button
                        block
                        icon={<RiShoppingBagLine className="remix-icon" />}
                        type="primary"
                        onClick={() => dispatch(addToCart(value.id))}
                      >
                        Add to Cart
                      </Button>
                    </Col>
                  )
                ) : (
                  <Col xl={14} span={24}>
                    <Row gutter={[8, 8]}>
                      <Col xl={17} span={12}>
                        <Link to="/apps/ecommerce/checkout">
                          <Button
                            block
                            icon={<RiShoppingBagLine className="remix-icon" />}
                            type="primary"
                          >
                            Go to Cart
                        </Button>
                        </Link>
                      </Col>

                      <Col xl={7} span={12}>
                        <InputNumber
                          min={1}
                          max={99}
                          value={value.qty}
                          onChange={onChangeHandler}
                          className="hp-w-100"
                        />
                      </Col>
                    </Row>
                  </Col>
                )
              }
            </Row>
          </Col>
        </Row>
      </Card>
    </Col >
  )
}