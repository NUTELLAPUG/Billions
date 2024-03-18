import React from "react";

import Slider from "react-slick";
import { Row, Col, Button } from "antd";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import productImg1 from "../../../../assets/images/product/ecommerce-product-img-1.png";
import productImg2 from "../../../../assets/images/product/ecommerce-product-img-2.png";
import ECommerceProductCardItem from "./eCommerceProductCardItem";

export default function ECommerceProductCard() {
  // Slider
  function SampleNextArrow(props) {
    const { onClick } = props;

    return (
      <Button
        onClick={onClick}
        className="hp-dashboard-ecommerce-product-slider-button next-button"
        icon={<RiArrowRightSLine className="remix-icon" size={24} />}
      ></Button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
      <Button
        onClick={onClick}
        className="hp-dashboard-ecommerce-product-slider-button prev-button"
        icon={<RiArrowLeftSLine className="remix-icon" size={24} />}
      ></Button>
    );
  }

  // Product Data
  const productCard = [
    {
      imgUrl: productImg1,
      price: "$69.00",
      discount: "$79.00",
      title: "Rales Wireless Earbuds Bluetooth 5.0",
      subTitle: "By Urbanears",
      rate: "4.5",
    },
    {
      imgUrl: productImg2,
      price: "$69.00",
      discount: "$79.00",
      title: "Rales Wireless Earbuds Bluetooth 5.0",
      subTitle: "By Urbanears",
      rate: "4.5",
    },
    {
      imgUrl: productImg1,
      price: "$69.00",
      discount: "$79.00",
      title: "Rales Wireless Earbuds Bluetooth 5.0",
      subTitle: "By Urbanears",
      rate: "4.5",
    },
    {
      imgUrl: productImg2,
      price: "$69.00",
      discount: "$79.00",
      title: "Rales Wireless Earbuds Bluetooth 5.0",
      subTitle: "By Urbanears",
      rate: "4.5",
    },
  ];

  const productCardMap = productCard.map((value, index) => (
    <ECommerceProductCardItem key={index} value={value} />
  ));

  return (
    <Row gutter={[32, 0]} className="hp-dashboard-ecommerce-product-slider hp-mt-12">
      <Col span={16} className="hp-mb-24">
        <h4 className="hp-mb-0">Best Selling Products</h4>
      </Col>

      <Slider
        dots={false}
        infinite={false}
        slidesToShow={3}
        slidesToScroll={1}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        responsive={[
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]}
      >
        {productCardMap}
      </Slider>
    </Row>
  );
}
