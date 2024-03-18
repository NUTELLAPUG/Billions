import React, { useState } from "react";

import "../../../apps/buy-plans/style.css"

import { Card, Col, Row } from "antd";
import { ChartCircle, ExportSquare } from "iconsax-react";
import Chart from "react-apexcharts";

export default function FeatureCard(props) {

  return (
    <Card className="custom-card hp-border-radius-xxl hp-dashboard-feature-card hp-cursor-pointer">
     <Row gutter={[16, 16]} align="middle">
        <Col flex="0 0 50px" >
          <div style={{padding: 15, textAlign: "center"}} className="hp-h-100 hp-bg-primary-4 hp-bg-color-dark-90 hp-border-radius-xl hp-d-flex-center">
          {props.icon}
          </div>
        </Col>

        <Col flex="1 0 0" className="hp-overflow-hidden">
          <h3 className="hp-mb-0 hp-font-weight-600 hp-d-flex-center">
            <span>{props.price}</span>
            <ExportSquare
              size="20"
              variant="Bold"
              className="hp-ml-4"
            />
          </h3>

          <p className="hp-p1-body hp-mb-0">
           {props.title}
          </p>
        </Col>
      </Row>
     
      
    </Card>
  );
}
