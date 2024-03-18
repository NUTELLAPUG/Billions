import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Row, Col, Avatar, Card, Button } from "antd";
import { RiHeartFill } from "react-icons/ri";

import cardAvatar1 from "../../../../assets/images/memoji/memoji-3.png";
import eth from "../../../../assets/images/dasboard/eth-logo.svg";
import ethDark from "../../../../assets/images/dasboard/eth-dark-logo.svg";
import cardBg1 from "../../../../assets/images/dasboard/nft-card-bg-1.png";
import cardCircleBg from "../../../../assets/images/dasboard/nft-card-circle-bg.svg";

export default function BidCardNFT() {
  // Theme
  const theme = useSelector(state => state.customise.theme)

  // Wish Check
  const [wishCheck, setWishCheck] = useState(false)

  return (
    <Card className="hp-border--xxl hp-overflow-hidden hp-card-3 hp-border-1 hp-border-color-black-40 hp-border-color-dark-80">
      {
        theme === "dark" && (
          <div
            className="hp-position-absolute-top-left hp-w-100 hp-h-100 hp-nft-dashboard-bid-card-dark-image"
            style={{ backgroundImage: "url(" + cardCircleBg + ")", backgroundSize: "cover", backgroundPosition: "center right" }}
          ></div>
        )
      }

      <div
        className="hp-position-relative hp-border-radius-xxl hp-nft-dashboard-bid-card-image"
        style={{ backgroundImage: "url(" + cardBg1 + ")", backgroundSize: "cover", backgroundPosition: "center", height: 168 }}
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

        <div className="hp-position-absolute-bottom-left hp-w-100 hp-py-10 hp-px-16">
          <Row align="middle" justify="space-between">
            <Col md={12} span={24}>
              <span
                className="h4 hp-text-color-black-0 hp-text-overflow-ellipsis"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quas cupiditate laboriosam
              </span>
            </Col>

            <Col>
              <Row align="middle">
                <span className="hp-caption hp-font-weight-400 hp-text-color-black-0">by</span>

                <Avatar size={32} className="hp-bg-warning-3 hp-mx-8" src={cardAvatar1} />

                <span className="hp-caption hp-font-weight-400 hp-text-color-black-0">@4.edward</span>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <Row align="bottom" justify="space-between" className="hp-mt-8">
        <Col>
          <Row>
            <Col className="hp-pr-64 hp-pr-sm-16">
              <span className="hp-d-block hp-w-100 hp-caption hp-text-color-black-80 hp-text-color-dark-20">Current bid</span>

              <div className="hp-d-flex-center hp-mb-4">
                <span className="h5 hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-font-weight-500 hp-mr-6">0.00050 ETH</span>

                {
                  theme === "dark" ? (
                    <div className="hp-bg-black-0 hp-border-radius-full hp-d-flex">
                      <img src={ethDark} alt="eth" style={{ transform: "scale(1.1)" }} />
                    </div>
                  ) : (
                    <img src={eth} alt="eth" />
                  )
                }
              </div>

              <span className="hp-d-block hp-badge-text hp-text-color-black-60">$1,732.23</span>
            </Col>

            <Col>
              <span className="hp-d-block hp-w-100 hp-caption hp-text-color-black-80 hp-text-color-dark-20 hp-mb-4">Auction Ending In</span>

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
        </Col>

        <Col className="hp-mt-sm-24">
          <Row gutter={[16, 16]}>
            <Col>
              <Button type="primary" ghost className="hp-border-radius-full">View Artwork</Button>
            </Col>

            <Col>
              <Button type="primary" className="hp-border-radius-full">Place Bid</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}