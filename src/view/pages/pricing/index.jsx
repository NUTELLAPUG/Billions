import React, { useState } from "react";

import { Card, Row, Col, Switch } from "antd";

import Breadcrumbs from "../../../layout/components/content/breadcrumbs";
import ActionButton from "../../../layout/components/content/action-button";
import PricingItem from "./item";

export default function Pricing() {
  const [billedValue, setBilledValue] = useState(true);
  const billedText = `Billed ${billedValue ? "yearly" : "monthly"}`;

  const itemValues = [
    {
      title: "Basic",
      subTitle: "Simple explanation",
      price: `$ ${billedValue ? "199" : "59"}`,
      billed: billedText,
      special: false,
      best: false,
      button: "Try it for free",
      list: ["10gb Space", "1 User", "Team inbox"],
    },
    {
      title: "Starter",
      subTitle: "Simple explanation",
      price: `$ ${billedValue ? "199" : "59"}`,
      billed: billedText,
      special: false,
      best: true,
      button: "Try it for free",
      list: [
        "10gb Space",
        "1 User",
        "Team inbox",
        "Website Analitcs",
        "Promotional Pop-ups",
      ],
    },
    {
      title: "Proffesional",
      subTitle: "Simple explanation",
      price: `$ ${billedValue ? "399" : "289"}`,
      billed: billedText,
      special: true,
      best: false,
      button: "Get Started Now",
      list: [
        "10gb Space",
        "4 User",
        "Team inbox",
        "Lorem Ipsum",
        "Dolor Sit",
        "Website Analitcs",
        "Promotional Pop-ups",
        "24/7 Customer Support",
      ],
    },
    {
      title: "Advanced",
      subTitle: "Simple explanation",
      price: `$ ${billedValue ? "499" : "359"}`,
      billed: billedText,
      special: false,
      best: false,
      button: "Try it for free",
      list: [
        "10gb Space",
        "4 User",
        "Team inbox",
        "Website Analitcs",
        "Promotional Pop-ups",
        "Lorem Ipsum",
        "Dolor Sit",
        "Website Analitcs",
        "24/7 Customer Support",
        "Consectetur Adipiscing",
      ],
    },
  ];

  function onChange(checked) {
    if (checked) {
      setBilledValue(true);
    } else {
      setBilledValue(false);
    }
  }

  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]} justify="space-between">
          <Breadcrumbs breadCrumbParent="Pages" breadCrumbActive="Pricing" />

          <ActionButton />
        </Row>
      </Col>

      <Col span={24}>
        <Card className="hp-border-color-black-40 hp-pb-sm-0 hp-pb-64">
          <Row>
            <Col span={24}>
              <h1 className="hp-mb-4">Simple & Flexible Plans</h1>
              <p className="hp-p1-body hp-mb-0">
                Get unlimited versions with our detailed plans
              </p>
            </Col>

            <Col span={24}>
              <Row
                align="middle"
                justify="center"
                className="hp-mt-32 hp-mb-24"
              >
                <span
                  className={`hp-caption ${billedValue
                    ? "hp-text-color-black-60"
                    : "hp-text-color-primary-1"
                    }`}
                >
                  Billed monthly
                </span>

                <Switch
                  className="hp-mx-8"
                  defaultChecked
                  onChange={onChange}
                />

                <span
                  className={`hp-caption ${billedValue
                    ? "hp-text-color-primary-1"
                    : "hp-text-color-black-60"
                    }`}
                >
                  Billed Yearly
                </span>
              </Row>

              <PricingItem values={itemValues} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}