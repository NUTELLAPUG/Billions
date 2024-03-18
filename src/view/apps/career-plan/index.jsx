import React, { useState, useEffect } from "react";

import { Layout, Row, Col, Card, Button, Drawer } from "antd";

// Redux
import { useSelector, useDispatch } from "react-redux";

const { Sider, Content } = Layout;

export default function Calender() {

  // Redux
  const dispatch = useDispatch();

  return (
    <Layout className="hp-calendar hp-mb-32 hp-bg-dark-90">


      <Content>
        <Card>
          <Row>
            <Col flex="1 1" className="hp-py-24">
              <h5>Hi</h5>
            </Col>
          </Row>
        </Card>

      </Content>
    </Layout>
  );
}
