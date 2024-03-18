import React, { useState } from "react";

import { Card, Row, Col } from "antd";
import {
  RiArrowRightDownLine,
  RiArrowRightUpLine,
  RiSubtractFill,
} from "react-icons/ri";
import Chart from "react-apexcharts";

export default function RevenueLineEcommerceList() {
  const [data1] = useState({
    series: [
      {
        data: [0, 20, 10, 40, 50, 30],
      },
    ],
    options: {
      chart: {
        type: "line",
        id: "revenue-line-1",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      legend: {
        show: false,
      },
      markers: {
        size: 1,
        strokeColors: "#FF8B9A",
        strokeOpacity: 0,
      },

      colors: ["#FF8B9A"],
      stroke: {
        lineCap: "round",
        width: 2,
      },
      tooltip: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        borderColor: "#B2BEC3",
        strokeDashArray: 6,
        position: "back",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],
      yaxis: {
        show: false,
      },
    },
  });

  const [data2] = useState({
    series: [
      {
        data: [0, 20, 10, 40, 50, 30],
      },
    ],
    options: {
      chart: {
        type: "line",
        id: "revenue-line-2",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#0063F7"],
      stroke: {
        lineCap: "round",
        width: 2,
      },
      markers: {
        size: 1,
        strokeColors: "#0063F7",
        strokeOpacity: 0,
      },
      tooltip: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        borderColor: "#B2BEC3",
        strokeDashArray: 6,
        position: "back",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],
      yaxis: {
        show: false,
      },
    },
  });

  const [data3] = useState({
    series: [
      {
        data: [0, 20, 10, 40, 50, 30],
      },
    ],
    options: {
      chart: {
        type: "line",
        id: "revenue-line-3",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#FFE393"],
      stroke: {
        lineCap: "round",
        width: 2,
      },
      markers: {
        size: 1,
        strokeColors: "#FFE393",
        strokeOpacity: 0,
      },
      tooltip: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
        borderColor: "#B2BEC3",
        strokeDashArray: 6,
        position: "back",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],
      yaxis: {
        show: false,
      },
    },
  });

  return (
    <Card
      className="hp-border-color-black-40"
      style={{
        height: 424
      }}
    >
      <Row>
        <Col className="hp-mb-16" span={24}>
          <Row justify="space-between" align="middle">
            <h5 className="hp-mb-0 hp-font-weight-600">Revenue</h5>

            <p className="hp-badge-text hp-text-color-black-80 hp-text-color-dark-30 hp-mb-0">
              May 2021
            </p>
          </Row>
        </Col>

        <Col span={24}>
          <Row align="middle">
            <Col id="revenue-line-1" span={12}>
              <Chart
                options={data1.options}
                series={data1.series}
                type="line"
                legend="legend"
                height={100}
              />
            </Col>

            <div className="hp-ml-32">
              <p className="hp-text-color-dark-0 hp-mb-0">Total Sales</p>

              <Row align="middle" justify="end">
                <h5 className="hp-mb-0 hp-mr-4">$12.253</h5>

                <RiArrowRightDownLine
                  className="hp-text-color-danger-1"
                  size={12}
                />

                <p className="hp-mb-0 hp-input-description hp-text-color-danger-1">
                  10%
                </p>
              </Row>
            </div>
          </Row>

          <Row align="middle">
            <Col id="revenue-line-2" span={12}>
              <Chart
                options={data2.options}
                series={data2.series}
                type="line"
                legend="legend"
                height={100}
              />
            </Col>

            <div className="hp-ml-32">
              <p className="hp-text-color-dark-0 hp-mb-0">Total Expense</p>

              <Row align="middle" justify="end">
                <h5 className="hp-mb-0 hp-mr-4">$4,253</h5>

                <RiArrowRightUpLine
                  className="hp-text-color-primary-1"
                  size={12}
                />

                <p className="hp-mb-0 hp-input-description hp-text-color-primary-1">
                  10%
                </p>
              </Row>
            </div>
          </Row>

          <Row align="middle">
            <Col id="revenue-line-3" span={12}>
              <Chart
                options={data3.options}
                series={data3.series}
                type="line"
                legend="legend"
                height={100}
              />
            </Col>

            <div className="hp-ml-32">
              <p className="hp-text-color-dark-0 hp-mb-0">Total Profit</p>

              <Row align="middle" justify="end">
                <h5 className="hp-mb-0 hp-mr-4">$4,253</h5>

                <RiSubtractFill
                  className="hp-text-color-warning-1"
                  size={12}
                />

                <p className="hp-mb-0 hp-input-description hp-text-color-warning-1">
                  10%
                </p>
              </Row>
            </div>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}