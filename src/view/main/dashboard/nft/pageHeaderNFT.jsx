import React from "react";

import { Row, Col, Avatar } from "antd";

import avatarImage from "../../../../assets/images/dasboard/nft-avatar.png";

export default function PageHeaderNFT() {
  return (
    <Row align="top" justify="space-between">
      <Col md={15} span={24}>
        <Row align="middle" wrap={false}>
          <Col>
            <Avatar size={85} src={avatarImage} style={{ background: "none" }} />
          </Col>

          <Col className="hp-ml-14">
            <h2 className="hp-mb-4">Welcome back, Edward 👋</h2>

            <p className="hp-p1-body hp-mb-0">
              Discover limited-edition digital artwork Create, sell and collect your now!
            </p>
          </Col>
        </Row>
      </Col>

      <Col className="hp-mt-sm-24 hp-mt-8">
        <div className="hp-d-flex-center hp-cursor-pointer hp-border-radius-full hp-bg-black-0 hp-bg-dark-100 hp-py-4 hp-pl-6 hp-pr-18">
          <div className="hp-border-radius-full hp-bg-primary-4 hp-bg-dark-primary-1 hp-d-flex-full-center hp-px-24 hp-py-12">
            <svg className="hp-stroke-dark-100" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.02422 5.64172V10.4073" stroke="#0010F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.4097 8.02458H5.63916" stroke="#0010F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5332 8.02455C1.5332 3.15648 3.15636 1.53333 8.02443 1.53333C12.8925 1.53333 14.5157 3.15648 14.5157 8.02455C14.5157 12.8926 12.8925 14.5158 8.02443 14.5158C3.15636 14.5158 1.5332 12.8926 1.5332 8.02455Z" stroke="#0010F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <span className="hp-text-color-primary-1 hp-text-color-dark-0 hp-p1-body hp-ml-12">Start Sale</span>
        </div>
      </Col>
    </Row>
  );
}
