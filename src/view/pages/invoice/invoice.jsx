import React from "react";

import { useSelector } from "react-redux";

import {
  Row,
  Col,
  Card,
  Divider,
  Table,
} from "antd";

import logo from "../../../assets/images/logo/logo.svg";
import logoDark from "../../../assets/images/logo/logo-dark.svg";

export default function InvoiceCard() {
  // Redux
  const customise = useSelector(state => state.customise)

  // Column Data
  const columns = [
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "QTY",
      dataIndex: "qty",
      key: "qty",
      render: (text) => <p>{text}</p>,
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <h5 className="hp-text-align-right">{text}</h5>,
      align: "right",
    },
  ];

  const data = [
    {
      key: "1",
      item: "Yoda Admin",
      description: "HTML Admin Template",
      cost: "28 $",
      qty: "1",
      price: "$ 28",
    },
    {
      key: "2",
      item: "Logo Design",
      description: "Guideline, Idea,Color Combinations,LogoTYPE",
      cost: "220 $",
      qty: "1",
      price: "$ 220",
    },
  ];

  return (
    <Card id="invoice" className="hp-mb-32 hp-invoice-card">
      <Row justify="space-between">
        <Col xl={12} xs={24} sm={12}>
          {
            customise.theme == "light" ? (
              <img className="hp-logo hp-mb-16" src={logo} alt="logo" />
            ) : (
              <img className="hp-logo hp-mb-16" src={logoDark} alt="logo" />
            )
          }
        </Col>

        <Col>
          <p className="hp-p1-body hp-mb-16">
            INVOICE NUMBER #125863478945
          </p>
        </Col>

        <Col>
          <p>Company name</p>
          <p>1065 Mandan Road, Columbia MO, Missouri. (123)-65202</p>
          <p>demo@gmail.com</p>
          <p>+91 919-91-91-919</p>
        </Col>
      </Row>

      <Divider />

      <Row justify="space-bewtween">
        <Col md={8} xs={24} className="hp-pb-16 hp-print-info">
          <p className="hp-text-color-black-100 hp-text-color-dark-0 hp-input-label">
            CLIENT INFORMATION:
          </p>
          <p>Edward Yildirim</p>
          <p>1065 Atasehir/Istanbul </p>
          <p>(123)-65202</p>
          <p>(1234) - 567891</p>
          <p>demo@gmail.com</p>
        </Col>

        <Col md={8} xs={24} className="hp-pb-16 hp-print-info">
          <p className="hp-text-color-black-100 hp-text-color-dark-0 hp-input-label">
            ORDER INFORMATION:
          </p>
          <p>Date: November 14</p>
          <p>Status: Pending</p>
          <p>Id : #146859</p>
        </Col>

        <Col
          md={8}
          xs={24}
          className="hp-text-sm-left hp-text-right hp-print-info"
        >
          <p>Date Issue: 08/10/2019</p>
          <p>Date Due: 08/10/2019</p>
        </Col>
      </Row>

      <Divider />

      <Table
        columns={columns}
        dataSource={data}
        bordered={false}
        pagination={false}
      />

      <Divider />

      <Row justify="end">
        <Col md={6} sm={12} xs={24} className="hp-pb-16 hp-print-checkout">
          <Row align="middle" justify="space-between">
            <p className="hp-badge-text">Subtotal</p>
            <h5 className="hp-mb-4">$ 248.00</h5>
          </Row>

          <Row align="middle" justify="space-between">
            <p className="hp-badge-text">Discount %10 </p>
            <h5 className="hp-mb-4">-$ 24.80 </h5>
          </Row>

          <Row align="middle" justify="space-between">
            <p className="hp-badge-text">Tax %20</p>
            <h5>$ 49.60</h5>
          </Row>

          <Divider />

          <Row align="middle" justify="space-between">
            <h5 className="hp-text-color-primary-1">Total</h5>
            <h5 className="hp-text-color-primary-1">$ 272.80</h5>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
