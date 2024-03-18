import React, { useState } from "react";

import { Row, Col, Avatar, Card, Button } from "antd";
import { RiHeartFill } from "react-icons/ri";

import cardAvatar1 from "../../../../assets/images/memoji/memoji-3.png";
import eth from "../../../../assets/images/dasboard/eth-logo-2.svg";
import cardBg1 from "../../../../assets/images/dasboard/nft-product-card.png";

export default function NFTProductCard() {
  // Wish Check
  const [wishCheck, setWishCheck] = useState(false)

  return (
    <Card className="hp-border-radius-xxl hp-overflow-hidden hp-border-1 hp-border-color-black-40 hp-border-color-dark-80">
      <Row gutter={[20, 0]}>
        <Col md={11} span={24}>
          <div
            className="hp-position-relative hp-border-radius hp-overflow-hidden hp-nft-dashboard-product-card-image"
            style={{ backgroundImage: "url(" + cardBg1 + ")", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="hp-position-absolute-top-right hp-py-10 hp-px-16">
              {
                wishCheck ? (
                  <div
                    className='hp-wish-button hp-cursor-pointer hp-border-radius-round remix-icon hp-p-8 hp-rate hp-text-color-danger-1 hp-bg-color-danger-4 hp-bg-color-dark-danger'
                    onClick={() => setWishCheck(false)}
                  >
                    <RiHeartFill />
                  </div>
                ) : (
                  <div
                    className='hp-wish-button hp-cursor-pointer hp-border-radius-round remix-icon hp-p-8 hp-rate hp-text-color-black-40 hp-text-color-dark-70 hp-bg-color-black-10 hp-bg-color-dark-90'
                    onClick={() => setWishCheck(true)}
                  >
                    <RiHeartFill />
                  </div>
                )
              }
            </div>
          </div>
        </Col>

        <Col md={13} span={24} className="hp-mt-sm-24">
          <Row className="hp-h-100 hp-d-flex-column" justify="space-between">
            <Col>
              <Row align="middle" className="hp-mb-24">
                <Col>
                  <Avatar size={45} className="hp-bg-warning-3 hp-mr-12" src={cardAvatar1} />
                </Col>

                <Col>
                  <span className="hp-d-block hp-caption hp-font-weight-400 hp-text-color-black-60">Owned by</span>
                  <span className="hp-d-block hp-p1-body hp-font-weight-500 hp-text-color-black-100 hp-text-color-dark-0">Daniel Malbrook</span>
                </Col>
              </Row>

              <span className="hp-d-block h3 hp-text-color-black-100 hp-text-color-dark-0 hp-mb-24">Contemporary Colour Abstract Painting</span>
            </Col>

            <Col>
              <div
                className="hp-border-radius hp-bg-black-10 hp-bg-dark-90 hp-p-18 hp-position-relative hp-overflow-hidden"
                style={{
                  height: 80
                }}
              >
                <span
                  className="line hp-bg-primary-1 hp-position-absolute-top-center-left"
                  style={{ width: 5, height: "70%", borderRadius: 10, left: -2 }}
                ></span>

                <Row justify="space-between">
                  <Col>
                    <span className="hp-p1-body hp-font-weight-500 hp-text-color-black-80 hp-text-color-dark-30">Current <br /> Bid</span>
                  </Col>

                  <Col>
                    <span className="hp-d-flex-center hp-font-weight-500 hp-text-color-primary-1 h4">
                      <img src={eth} alt="eth" className="hp-mb-4 hp-mr-4" />
                  0.00050 ETH
                </span>

                    <span className="hp-d-block hp-input-description hp-font-weight-500 hp-text-color-black-60" style={{ marginLeft: 26 }}>$1,732.23</span>
                  </Col>
                </Row>
              </div>

              <div
                className="hp-border-radius hp-bg-black-10 hp-bg-dark-90 hp-p-18 hp-mt-16 hp-position-relative hp-overflow-hidden"
                style={{
                  height: 80
                }}
              >
                <span
                  className="line hp-bg-primary-1 hp-position-absolute-top-center-left"
                  style={{ width: 5, height: "70%", borderRadius: 10, left: -2 }}
                ></span>

                <Row justify="space-between">
                  <Col>
                    <span className="hp-p1-body hp-font-weight-500 hp-text-color-black-80 hp-text-color-dark-30">Auction <br /> Ending In</span>
                  </Col>

                  <Col>
                    <Row>
                      <Col>
                        <span className="h4 hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-font-weight-500 hp-mb-8">00</span>
                        <span className="hp-d-block hp-badge-text hp-font-weight-500 hp-text-color-black-60">Hours</span>
                      </Col>

                      <Col><span className="hp-d-block h4 hp-text-color-black-100 hp-text-color-dark-20 hp-mx-6">:</span></Col>

                      <Col>
                        <span className="h4 hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-font-weight-500 hp-mb-8">56</span>
                        <span className="hp-d-block hp-badge-text hp-font-weight-500 hp-text-color-black-60">Mins</span>
                      </Col>

                      <Col><span className="hp-d-block h4 hp-text-color-black-100 hp-text-color-dark-20 hp-mx-6">:</span></Col>

                      <Col>
                        <span className="h4 hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-font-weight-500 hp-mb-8">24</span>
                        <span className="hp-d-block hp-badge-text hp-font-weight-500 hp-text-color-black-60">Secs</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>

              <Row gutter={[16, 16]} className="hp-mt-16">
                <Col span={12}>
                  <Button type="primary" block className="hp-border-radius-full">Place Bid</Button>
                </Col>

                <Col span={12}>
                  <Button type="primary" block ghost className="hp-border-radius-full">View Art</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}