import React from "react";

import { Row, Col, Rate } from "antd";

export default function ECommerceProductCardItem(props) {
  const { value } = props

  return (
    <div className="hp-px-16 hp-card-6 hp-eCommerceCardOne hp-cursor-pointer">
      <div className="hp-border-radius hp-overflow-hidden hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100 hp-h-100">
        <div className="hp-text-center hp-eCommerceCardOne-product-img hp-bg-color-black-10 hp-bg-color-dark-80 hp-card-2 hp-d-flex-center-full">
          <img src={value.imgUrl} alt={value.title} className="hp-m-auto" />
        </div>

        <Row className="hp-p-24">
          <Col span={24} className="hp-mb-16 hp-mt-8">
            <h3 className="hp-mb-4">{value.price}</h3>
            <p className="hp-mb-0 hp-mr-4 hp-font-weight-500 hp-text-color-black-60 hp-text-color-dark-50 hp-text-line-through hp-badge">
              {value.discount}
            </p>
          </Col>

          <Col span={24} className="hp-mb-8">
            <p className="hp-mb-4 hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body">
              {value.title}
            </p>
            <p className="hp-mb-0 hp-caption hp-text-color-black-60 hp-text-color-dark-50">
              {value.subTitle}
            </p>
          </Col>

          <Col span={24} className="hp-mt-16">
            <Rate defaultValue={parseFloat(value.rate)} allowHalf></Rate>
          </Col>
        </Row>
      </div>
    </div>
  );
}
