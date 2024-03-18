import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, adjustItemQty, loadCurrentItem } from '../../../../redux/ecommerce/ecommerceActions';

import Slider from "react-slick";
import { Row, Col, Button, Card, Rate, Divider, InputNumber, Tag } from "antd";
import { RiArrowRightUpLine, RiShoppingBagLine, RiTruckLine, RiCheckboxCircleLine, RiShieldLine, RiTimeLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import BreadCrumbs from '../../../../layout/components/content/breadcrumbs';

export default function Detail() {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)

  let slider1 = []
  let slider2 = []

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  // Redux
  const products = useSelector(state => state.ecommerce.products)

  const value = useSelector(state => state.ecommerce.currentItem)
  const dispatch = useDispatch()

  // Qty
  const onChangeHandler = (e, valueId) => {
    dispatch(adjustItemQty(valueId, e))
  };

  // Price
  const discountSplit1 = value.discount.toString().split('.')[0];
  const discountSplit2 = value.discount.toString().split('.')[1];

  const priceSplit1 = value.price.toString().split('.')[0];
  const priceSplit2 = value.price.toString().split('.')[1];

  // Other Slide
  function SampleNextArrow(props) {
    const { onClick } = props;

    return (
      <Button
        onClick={onClick}
        className="hp-other-slide-next-arrow"
        icon={<RiArrowRightSLine className="remix-icon" size={18} />}
      ></Button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
      <Button
        onClick={onClick}
        className="hp-other-slide-prev-arrow"
        icon={<RiArrowLeftSLine className="remix-icon" size={18} />}
      ></Button>
    );
  }

  return (
    <Row className="hp-ecommerce-app-detail hp-mb-32" key={value.id}>
      <Col className="hp-mb-32" span={24}>
        <Row gutter={[32, 32]}>
          <BreadCrumbs
            breadCrumbParent="Applications"
            breadCrumbParent2="E-Commerce"
            breadCrumbActive="Product Detail"
          />
        </Row>
      </Col>

      <Col span={24}>
        <Card className="hp-border-color-black-40">
          <Row>
            {
              value.featured && (
                <Tag className="hp-position-absolute-top-left hp-z-index hp-m-sm-16 hp-m-32 hp-border-none hp-py-4 hp-font-weight-500" color="blue">
                  Featured
                </Tag>
              )
            }

            {
              value.onSale && (
                <Tag className="hp-position-absolute-top-left hp-z-index hp-m-sm-16 hp-m-32 hp-border-none hp-py-4 hp-font-weight-500" color="red">
                  On Sale
                </Tag>
              )
            }

            {
              value.new && (
                <Tag className="hp-position-absolute-top-left hp-z-index hp-m-sm-16 hp-m-32 hp-border-none hp-py-4 hp-font-weight-500" color="green">
                  New
                </Tag>
              )
            }

            {
              value.sponsored && (
                <Tag className="hp-position-absolute-top-left hp-z-index hp-m-sm-16 hp-m-32 hp-border-none hp-py-4 hp-font-weight-500" color="yellow">
                  Sponsored
                </Tag>
              )
            }

            <Col lg={12} span={24} className="hp-ecommerce-app-detail-slider hp-mt-sm-24 hp-mb-md-64 hp-mb-md-32">
              {
                value.images ? (
                  <>
                    <Slider
                      asNavFor={nav2}
                      infinite={false}
                      arrows={false}
                      ref={slider => (slider1 = slider)}
                    >
                      {
                        value.images.map((item, index) => (
                          <div key={index} className="hp-d-flex-full-center">
                            <img src={require(`../../../../assets/images/product/${item.img}`)} alt={item.title} />
                          </div>
                        ))
                      }
                    </Slider>

                    <Slider
                      asNavFor={nav1}
                      ref={slider => (slider2 = slider)}
                      slidesToShow={4}
                      swipeToSlide={true}
                      focusOnSelect={true}
                      infinite={false}
                      arrows={false}
                      responsive={[
                        {
                          breakpoint: 767,
                          settings: {
                            slidesToShow: 3,
                          }
                        }
                      ]}
                    >
                      {
                        value.images.map((item, index) => (
                          <div key={index} className="hp-slick-slide-item hp-mx-8 hp-d-flex-full-center">
                            <div className="hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-border-radius hp-d-flex-full-center">
                              <img src={require(`../../../../assets/images/product/${item.img}`)} alt={item.title} />
                            </div>
                          </div>
                        ))
                      }
                    </Slider>
                  </>
                ) : (
                  <div className="hp-ecommerce-app-detail-single-image hp-text-center">
                    <img src={require(`../../../../assets/images/product/${value.imgList}`)} alt={value.title} />
                  </div>
                )
              }
            </Col>

            <Col lg={12} span={24}>
              <h2 className="hp-mb-8">{value.title}</h2>

              <span className="hp-caption hp-d-block hp-text-color-black-60">
                By
                <span className="hp-ml-4 hp-text-color-black-80 hp-text-color-dark-30">{value.person}</span>
              </span>

              <Row className="hp-mt-24 hp-pr-42" align="middle" justify="space-between">
                <Col md={12} span={24}>
                  <Row align="middle">
                    {

                      value.discount !== '' && (
                        <div className="hp-d-inline-block hp-border-radius hp-bg-color-danger-1 hp-caption hp-line-height-normal hp-text-color-black-0 hp-text-center hp-px-6 hp-py-4 hp-mr-8">
                          Save <br /> %14
                        </div>
                      )
                    }

                    <Col>
                      <Row align="bottom" className="hp-h-100">
                        {
                          value.discount ? (
                            <>
                              <span className="h2 hp-d-inline-block hp-mb-0 hp-mr-4">
                                ${discountSplit1}.
                                <sup style={{ top: -6 }}>
                                  {discountSplit2}
                                </sup>
                              </span>

                              <span className="hp-d-inline-block hp-mb-6 hp-text-color-black-60 hp-text-line-through hp-p1-body hp-font-weight-500">
                                ${priceSplit1}.
                                <sup style={{ top: -3 }}>
                                  {priceSplit2}
                                </sup>
                              </span>
                            </>
                          ) : (
                            <span className="h2 hp-d-inline-block hp-mb-0 hp-mr-4">
                              ${priceSplit1}.
                              <sup style={{ top: -6 }}>
                                {priceSplit2}
                              </sup>
                            </span>
                          )
                        }
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col className="hp-mt-sm-24">
                  <Row align="middle" className="hp-mb-4">
                    <Rate defaultValue={value.rate} allowHalf style={{ fontSize: 15 }}></Rate>

                    <span className="hp-d-block hp-text-left hp-caption hp-text-color-black-80 hp-text-color-dark-30 hp-ml-8">
                      {value.rate}
                    </span>
                  </Row>

                  <span className="hp-d-block hp-text-left hp-caption hp-text-color-black-80 hp-text-color-dark-30">
                    {value.ratings} Ratings
                  </span>
                </Col>
              </Row>

              <Divider />

              {
                value.colors && (
                  <>
                    <Row gutter={[16, 16]} className="hp-pr-32">
                      {
                        products.map((item) =>
                          value.colors.map((colorIndex) =>
                            (item.id == colorIndex) && (
                              <Col key={item.id} md={6} span={12} >
                                <Link
                                  to={`/apps/ecommerce/product-detail/${item.id}`}
                                  onClick={() => dispatch(loadCurrentItem(item))}
                                >
                                  <div className="hp-border-radius hp-border-1 hp-border-color-black-40 hp-px-8 hp-py-12">
                                    <Row align="middle" justify="center">
                                      <Col className="hp-mr-4">
                                        <img src={require(`../../../../assets/images/product/${item.imgList}`)} height={28} alt={item.color} />
                                      </Col>

                                      <Col span={12} className="hp-text-center">
                                        <span className="hp-d-block hp-input-description hp-text-color-black-80 hp-font-weight-400">{item.color}</span>

                                        {
                                          item.discount ? (
                                            <span className="hp-d-block hp-input-description hp-text-color-black-100">{item.discount}</span>
                                          ) : (
                                            <span className="hp-d-block hp-input-description hp-text-color-black-100">{item.price}</span>
                                          )
                                        }
                                      </Col>
                                    </Row>
                                  </div>
                                </Link>
                              </Col>
                            )
                          )
                        )
                      }
                    </Row>

                    <Divider />
                  </>
                )
              }


              <Row gutter={[24, 24]}>
                {
                  !value.addToCartCheck ? (
                    value.basketBtn && (
                      <Col>
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
                        <Col>
                          <InputNumber
                            min={1}
                            max={99}
                            value={value.qty}
                            onChange={(e) => onChangeHandler(e, value.id)}
                          />
                        </Col>

                        <Col>
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

                <Col span={24}>
                  <Row gutter={[8, 8]}>
                    <Col span={24} className="hp-d-flex-center">
                      <RiTruckLine className="hp-text-color-primary-1" />
                      <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30 hp-font-weight-400 hp-text-underline hp-ml-4">Free Shipping Worldwide</span>
                    </Col>

                    <Col span={24} className="hp-d-flex-center">
                      <RiCheckboxCircleLine className="hp-text-color-primary-1" />
                      <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30 hp-font-weight-400 hp-text-underline hp-ml-4">Available in stocks</span>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Divider />

              <Row gutter={[24, 24]}>
                <Col md={10} span={24}>
                  <Row align="middle">
                    <Col
                      className="hp-border-radius-full hp-bg-color-primary-4 hp-d-flex-full-center hp-mr-8"
                      style={{ width: 36, height: 36 }}
                    >
                      <RiShieldLine className="hp-text-color-primary-1" size={24} />
                    </Col>

                    <Col>
                      <span className="hp-d-block hp-p1-body hp-font-weight-500 hp-text-color-black-100 hp-text-color-dark-0">
                        1 Year Warranty
                      </span>

                      <span className="hp-d-block hp-input-description hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                        Lorem Ipsum Dolor Sıt Amet
                      </span>
                    </Col>
                  </Row>
                </Col>

                <Col md={10} span={24}>
                  <Row align="middle">
                    <Col
                      className="hp-border-radius-full hp-bg-color-primary-4 hp-d-flex-full-center hp-mr-8"
                      style={{ width: 36, height: 36 }}
                    >
                      <RiTimeLine className="hp-text-color-primary-1" size={24} />
                    </Col>

                    <Col>
                      <span className="hp-d-block hp-p1-body hp-font-weight-500 hp-text-color-black-100 hp-text-color-dark-0">
                        14 Days Replacement
                      </span>
                      <span className="hp-d-block hp-input-description hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30">
                        Lorem Ipsum Dolor Sıt Amet
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <Divider />

          <Row>
            <Col span={24} className="hp-ecommerce-app-detail-other-slider hp-mt-64">
              <Slider
                dots={false}
                infinite={false}
                slidesToShow={6}
                slidesToScroll={1}
                nextArrow={<SampleNextArrow />}
                prevArrow={<SamplePrevArrow />}
                responsive={[
                  {
                    breakpoint: 1199,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                    }
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    }
                  }
                ]}
              >
                {
                  products.map((item, index) =>
                    (item.id !== value.id) && (
                      <div key={index} className="hp-px-12">
                        <Link
                          to={`/apps/ecommerce/product-detail/${item.id}`}
                          className="hp-d-block hp-border-radius hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-card-3 hp-p-16 hp-text-center"
                          onClick={() => dispatch(loadCurrentItem(item))}
                        >
                          <img src={require(`../../../../assets/images/product/${item.imgList}`)} height={90} className="hp-m-auto" alt={item.title} />

                          <h5 className="hp-mb-0 hp-mt-24 hp-mx-12 hp-p1-body hp-font-weight-500">
                            {item.title}
                          </h5>

                          <h4 className="hp-mb-8 hp-mt-16 hp-text-color-primary-1">
                            {
                              item.discount ? (
                                item.discount
                              ) : (
                                item.price
                              )
                            }
                          </h4>

                          <Row align="middle" justify="center">
                            <RiArrowRightUpLine
                              size={16}
                              className="hp-text-color-success-1"
                            />
                            <span className="hp-d-block hp-mb-0 hp-mr-8 hp-badge-text hp-text-color-success-1">
                              +4
                            </span>
                            <span className="hp-d-block hp-mb-0 hp-badge-text hp-text-color-black-60">New Item</span>
                          </Row>
                        </Link>
                      </div>
                    )
                  )
                }
              </Slider>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row >
  )
}