import React from "react";

import { Row, Col } from "antd";

import ActionButton from "../../../layout/components/content/action-button";
import BreadCrumbs from "../../../layout/components/content/breadcrumbs";
import InvoiceActions from "./invoiceActions";
import InvoiceCard from "./invoice";

export default function Invoice() {
  function print() {
    window.print();
  }

  return (
    <Row gutter={32}>
      <Col className="hp-mb-32" span={24}>
        <Row
          gutter={[32, 32]}
          justify="space-between"
          className="hp-print-none"
        >
          <BreadCrumbs breadCrumbParent="Pages" breadCrumbActive="Invoice" />
          
          <ActionButton />
        </Row>
      </Col>

      <Col xl={16} xs={24}>
        <InvoiceCard />
      </Col>

      <Col xl={8} xs={24} className="hp-print-none">
        <InvoiceActions print={print} />
      </Col>
    </Row>
  );
}
