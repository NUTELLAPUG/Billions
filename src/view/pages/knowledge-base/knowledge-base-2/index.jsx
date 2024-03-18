import React from "react";

import { Row, Col, Input, Tag } from "antd";

import ActionButton from "../../../../layout/components/content/action-button/index";
import BreadCrumbs from "../../../../layout/components/content/breadcrumbs/index";
import KnowledgeBaseCards from "./cards";

const { Search } = Input;

export default function KnowledgeBase2() {
  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <Row gutter={[32, 32]} justify="space-between">
          <BreadCrumbs
            breadCrumbParent="Pages"
            breadCrumbActive="Knowledge Base-2"
          />

          <ActionButton />
        </Row>
      </Col>

      <Col span={24}>
        <h1 className="hp-mb-0">Hello! How can we help you?</h1>
        
        <h5 className="hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
          or choose a category to quickly find the help you need.
        </h5>
      </Col>

      <Col xxl={10} xl={14} span={24}>
        <Search
          className="hp-xl-search-button"
          placeholder="Search for anything"
          allowClear
          enterButton="Search"
          size="large"
        />
      </Col>

      <Col span={24}>
        <Row align="middle">
          <p className="hp-p1-body hp-mb-0 hp-mb-xs-8 hp-mr-8">For Example:</p>

          <Col>
            <Row gutter={[0, 8]}>
              <Col>
                <Tag>Marketing</Tag>
              </Col>

              <Col>
                <Tag>Accessing Data</Tag>
              </Col>

              <Col>
                <Tag>Service Details</Tag>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <KnowledgeBaseCards />
      </Col>
    </Row>
  );
}
