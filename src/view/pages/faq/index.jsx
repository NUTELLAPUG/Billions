import React, { useState } from "react";

import { Row, Col, Input, Tag } from "antd";
import {
  RiFlagLine,
  RiPriceTag3Line,
  RiCustomerServiceLine,
  RiMailSendLine,
  RiMailLine,
  RiBasketballLine
} from "react-icons/ri";

import PageContent from "../../../layout/components/content/page-content";
import MenuFAQ from "./menu";
import CollapseItemFAQ from "./collapseItem";

const { Search } = Input;

const text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget eleifend lectus. Sed quis nisi lectus. Quisque vel leo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sit amet nisi eu nisi tincidunt facilisis. Sed mollis nisl dui, a sodales massa sodales sit amet. Sed nisl est, volutpat sed feugiat non, maximus id orci. Fusce placerat congue nulla, a consectetur massa hendrerit a.
`;

const data = [
  {
    icon:
      <RiFlagLine
        className="remix-icon hp-text-color-black-80 hp-text-color-dark-30"
        size={20}
      />,
    title:
      <span className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0">
        Getting Started
      </span>,
    items: [
      {
        item: [
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 1-1</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 1-2</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 1-3</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          }
        ]
      },
      {
        item: [
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 1-1</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 1-2</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 1-3</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          }
        ]
      },
      {
        item: [
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 1-1</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 1-2</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 1-3</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          }
        ]
      },
    ]
  },
  {
    icon:
      <RiPriceTag3Line
        className="remix-icon hp-text-color-black-80 hp-text-color-dark-30"
        size={20}
      />,
    title:
      <span className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0">
        Pricing
      </span>,
    items: [
      {
        item: [
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 2</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 2</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 2</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          }
        ]
      },
    ]
  },
  {
    icon:
      <RiCustomerServiceLine
        className="remix-icon hp-text-color-black-80 hp-text-color-dark-30"
        size={20}
      />,
    title:
      <span className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0">
        Call Service
      </span>,
    items: [
      {
        item: [
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 3</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 3</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 3</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          }
        ]
      },
    ]
  },
  {
    icon:
      <RiMailSendLine
        className="remix-icon hp-text-color-black-80 hp-text-color-dark-30"
        size={20}
      />,
    title:
      <span className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0">
        Mailing
      </span>,
    items: [
      {
        item: [
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 4</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 4</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 4</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          }
        ]
      },
    ]
  },
  {
    icon:
      <RiMailLine
        className="remix-icon hp-text-color-black-80 hp-text-color-dark-30"
        size={20}
      />,
    title:
      <span className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0">
        Server
      </span>,
    items: [
      {
        item: [
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 5</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 5</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          },
          {
            icon:
              <RiBasketballLine
                size={24}
                className="remix-icon hp-text-color-primary-1 hp-mr-18"
              />,
            title: <span>Lorem Ipsum Collapse Title 5</span>,
            tag:
              <Tag className="hp-ml-16" color="blue">
                Tag
                </Tag>,
            text: <p className="hp-p1-body">{text}</p>
          }
        ]
      },
    ]
  },
]

export default function FAQ() {
  const [tabValue, setTabValue] = useState("tab-0");

  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <PageContent
          title="Hello! How can we help you?"
          desc="or choose a category to quickly find the help you need."
          breadcrumb={[
            {
              title: "Pages",
            },
            {
              title: "FAQ",
            }
          ]}
        />
      </Col>
 
      <Col xxl={10} lg={15} span={24}>
        <Search
          className="hp-xl-search-button"
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
        />
      </Col>

      <MenuFAQ setTabValue={setTabValue} data={data} />

      <CollapseItemFAQ tabValue={tabValue} data={data} />
    </Row>
  );
}
