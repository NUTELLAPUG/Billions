import React from "react";

import { Col, Tabs } from "antd";

const { TabPane } = Tabs;

export default function MenuFAQ(props) {
  function tabsChange(key) {
    props.setTabValue(key);
  }

  return (
    <Col span={24}>
      <Tabs
        className="hp-faq-tabs hp-border-radius hp-bg-black-0 hp-bg-dark-100 hp-px-42"
        defaultActiveKey="1"
        onChange={tabsChange}
      >
        {
          props.data.map((item, index) => (
            <TabPane
              tab={
                <span className="hp-d-flex-center">
                  {item.icon}
                  {item.title}
                </span>
              }
              key={"tab-" + index}
            ></TabPane>
          ))
        }
      </Tabs>
    </Col>
  );
}
