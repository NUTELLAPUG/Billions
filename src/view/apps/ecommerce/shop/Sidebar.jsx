import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { Row, Col, Divider, Collapse, Radio, Slider, Button } from "antd";
import { RiArrowRightSLine } from "react-icons/ri";

const { Panel } = Collapse;

export default function Sidebar() {
  // Collapse
  const genExtra = () => (
    <RiArrowRightSLine
      size={24}
      className="hp-collapse-arrow hp-text-color-black-60"
    />
  );

  // Price Slider
  const priceMinValue = 0
  const priceMaxValue = 500
  const [priceMin, setPriceMin] = useState(priceMinValue)
  const [priceMax, setPriceMax] = useState(priceMaxValue)

  const priceOnChange = (value) => {
    setPriceMin(value[0])
    setPriceMax(value[1])
  }

  // Radio
  const [valueRate, setValueRate] = useState(0);
  const [valueTags, setValueTags] = useState(0);

  const onChangeRate = e => {
    setValueRate(e.target.value);
  };

  const onChangeTags = e => {
    setValueTags(e.target.value);
  };

  return (
    <Col flex="0 0 270px" className="hp-ecommerce-app-sidebar">
      <Row className="hp-border-radius hp-overflow-hidden hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100 hp-px-24 hp-py-16">
        <Col span={24}>
          <h5 className="hp-mb-4 hp-text-color-black-80 hp-text-color-dark-30">Digital Cameras</h5>
          <span className="hp-badge-text hp-d-block hp-text-color-black-80 hp-text-color-dark-30">112 Product</span>
        </Col>

        <Divider />

        <Collapse defaultActiveKey={1}>
          <Panel
            header={
              <h5 className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">Categories</h5>
            }
            key="1"
            showArrow={false}
            extra={genExtra()}
          >
            <Row className="hp-mt-16">
              <Col span={24}>
                <Link to="#" className="hp-badge-text hp-d-block hp-text-color-black-80 hp-text-color-dark-30">SLR Cameras</Link>
              </Col>

              <Col span={24} className="hp-mt-10">
                <Link to="#" className="hp-badge-text hp-d-block hp-text-color-black-80 hp-text-color-dark-30">Digital Cameras</Link>
              </Col>

              <Col span={24} className="hp-mt-10">
                <Link to="#" className="hp-badge-text hp-d-block hp-text-color-black-80 hp-text-color-dark-30">Mirrorless Compact Cameras</Link>
              </Col>

              <Col span={24} className="hp-mt-10">
                <Link to="#" className="hp-badge-text hp-d-block hp-text-color-black-80 hp-text-color-dark-30">Video Cameras</Link>
              </Col>

              <Col span={24} className="hp-mt-10">
                <Link to="#" className="hp-badge-text hp-d-block hp-text-color-black-80 hp-text-color-dark-30">Action Cameras</Link>
              </Col>
            </Row>
          </Panel>
        </Collapse>

        <Divider />

        <Collapse>
          <Panel
            header={
              <h5 className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">Ratings</h5>
            }
            key="1"
            showArrow={false}
            extra={genExtra()}
          >
            <Radio.Group onChange={onChangeRate} value={valueRate}>
              <Row className="hp-mt-16">
                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={1}>Show All</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">1,417</span>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={2}>1 Star and higher</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">230</span>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={3}>2 Star and higher</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">402</span>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={4}>3 Star and higher</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">188</span>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={5}>4 Star and higher</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">554</span>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={6}>5 Star</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">43</span>
                  </Row>
                </Col>
              </Row>
            </Radio.Group>
          </Panel>
        </Collapse>

        <Divider />

        <Collapse>
          <Panel
            header={
              <h5 className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">Price Range</h5>
            }
            key="1"
            showArrow={false}
            extra={genExtra()}
          >
            <Row className="hp-mt-16">
              <Col span={24}>
                <Row align="middle" justify="space-between" gutter={[8]}>
                  <Col span={11}>
                    <div className="hp-border-radius hp-overflow-hidden hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100 hp-p-12">
                      <span>$ {priceMin}</span>
                    </div>
                  </Col>

                  <Col className="hp-text-color-black-40 hp-text-color-dark-70">-</Col>

                  <Col span={11}>
                    <div className="hp-border-radius hp-overflow-hidden hp-border-1 hp-border-color-black-40 hp-border-color-dark-80 hp-bg-color-black-0 hp-bg-color-dark-100 hp-p-12">
                      <span>$ {priceMax}</span>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col span={24}>
                <Slider
                  className="hp-mt-24 hp-mx-16"
                  range
                  min={priceMinValue}
                  max={priceMaxValue}
                  onChange={priceOnChange}
                  defaultValue={[priceMin, priceMax]}
                  tipFormatter={null}
                />
              </Col>
            </Row>
          </Panel>
        </Collapse>

        <Divider />

        <Collapse>
          <Panel
            header={
              <h5 className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">Tags</h5>
            }
            key="1"
            showArrow={false}
            extra={genExtra()}
          >
            <Radio.Group onChange={onChangeTags} value={valueTags}>
              <Row className="hp-mt-16">
                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={1}>Featured</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">1,417</span>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={2}>On Sale</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">230</span>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={3}>New</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">402</span>
                  </Row>
                </Col>

                <Col span={24}>
                  <Row align="middle" justify="space-between">
                    <Radio value={4}>Sponsored</Radio>
                    <span className="hp-caption hp-text-color-black-80 hp-text-color-dark-30">188</span>
                  </Row>
                </Col>
              </Row>
            </Radio.Group>
          </Panel>
        </Collapse>

        <Button block type="primary" className="hp-mt-32">Remove Filter</Button>
      </Row>
    </Col>
  )
}