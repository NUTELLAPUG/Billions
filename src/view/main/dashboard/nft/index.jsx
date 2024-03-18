import React from "react";

import { Row, Col } from "antd";

import PageHeaderNFT from "./pageHeaderNFT";
import BidCardNFT from "./bidCard";
import OwnNFT from "./ownNFT";
import TotalBalanceNFT from "./totalBalance";
import RecentActivityNFT from "./recentActivity";
import SummaryNFT from "./summary";
import HotBidNFT from "./hotBid";

export default function NFT() {
  return (
    <Row gutter={[32, 0]} className="hp-nft-dashboard hp-mb-sm-64 hp-mb-96">
      <Col span={24}>
        <PageHeaderNFT />
      </Col>

      <Col span={24} className="hp-mt-32">
        <Row gutter={[32, 32]}>
          <Col lg={17} span={24}>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <BidCardNFT />
              </Col>

              <Col span={24}>
                <OwnNFT />
              </Col>
            </Row>
          </Col>

          <Col lg={7} span={24}>
            <RecentActivityNFT />
          </Col>
        </Row>

        <Row gutter={[32, 32]} className="hp-mt-32">
          <Col lg={17} span={24}>
            <SummaryNFT />
          </Col>

          <Col lg={7} span={24}>
            <TotalBalanceNFT />
          </Col>
        </Row>

        <Row className="hp-mt-32">
          <Col span={24}>
            <HotBidNFT />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
