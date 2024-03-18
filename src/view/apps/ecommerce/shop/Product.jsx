import React from 'react'
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart, addToWish, adjustItemQty, loadCurrentItem, removeFromWishlist } from '../../../../redux/ecommerce/ecommerceActions';

import { Row, Col, Button, Card, Tag, Rate, InputNumber } from "antd";
import { RiHeartFill, RiShoppingBagLine } from "react-icons/ri";

export default function Product(props) {
  const { value } = props;
  const dispatch = useDispatch()

  // Qty
  const onChangeHandler = (e) => {
    dispatch(adjustItemQty(value.id, e))
  };

  return (
    <Col xl={8} md={12} span={24}>
      <Card className="hp-border-color-black-40 hp-card-6 hp-mb-32 hp-eCommerceCardOne">
        <Row>
          <Col span={24}>
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
          </Col>

          <Col span={24}>
            {
              value.imgList && (
                <Col className="hp-text-center hp-my-24">
                  <Link to={`/apps/ecommerce/product-detail/${value.id}`} onClick={() => dispatch(loadCurrentItem(value))}>
                    <img src={require(`../../../../assets/images/product/${value.imgList}`)} alt={value.title} height={125} />
                  </Link>
                </Col>
              )
            }

            <Row justify="space-between">
              {
                value.rate && (
                  <Col>
                    <Rate defaultValue={parseFloat(value.rate)} allowHalf></Rate>
                  </Col>
                )
              }

              <Col>
                <Row align="middle">
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
              </Col>
            </Row>

            <Col className="hp-mb-24 hp-mt-16">
              {
                value.title && (
                  <p className="hp-mb-4 hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body hp-font-weight-500">
                    {value.title}
                  </p>
                )
              }

              {
                value.subTitle && (
                  <p className="hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                    {value.subTitle}
                  </p>
                )
              }
            </Col>

            <Row gutter={16}>
              {
                value.detailBtn && (
                  <Col
                    span={24}
                    className="hp-mb-8"
                  >
                    <Link to={`/apps/ecommerce/product-detail/${value.id}`} onClick={() => dispatch(loadCurrentItem(value))}>
                      <Button block className="hp-text-color-black-60 hp-hover-text-color-primary-1 hp-hover-text-color-dark-primary-2">
                        Check Detail
                      </Button>
                    </Link>
                  </Col>
                )
              }

              {
                !value.addToCartCheck ? (
                  value.basketBtn && (
                    <Col span={24}>
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
                  <Col span={24}>
                    <Row gutter={[8, 8]}>
                      <Col span={8}>
                        <InputNumber
                          min={1}
                          max={99}
                          value={value.qty}
                          onChange={onChangeHandler}
                          className="hp-w-100"
                        />
                      </Col>

                      <Col span={16}>
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