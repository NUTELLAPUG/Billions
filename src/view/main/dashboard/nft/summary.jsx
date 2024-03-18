import React from "react";

import Chart from "react-apexcharts";
import { Row, Col, Select } from "antd";
import SummaryItem from "../../widgets/cards/statistics/summaryItem";

const { Option } = Select;

export default function SummaryNFT() {
  const data1 = {
    series: [
      {
        data: [31, 10, 109, 60, 140, 40, 300],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#00f7bf"],
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },
      tooltip: {
        enabled: true,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        labels: {
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
      yaxis: [
        {
          show: false,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
    },
  };

  const data2 = {
    series: [
      {
        data: [31, 10, 500, 60, 300, 40, 10],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "line",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#ff455e"],
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },
      tooltip: {
        enabled: true,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        labels: {
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
      yaxis: [
        {
          show: false,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row align="middle" justify="space-between" style={{ marginBottom: 13 }}>
        <Col span={12}>
          <span className="h3 hp-text-color-black-100 hp-text-color-dark-0">Summary</span>
        </Col>

        <Col>
          <Select defaultValue="weekly">
            <Option value="weekly">Weekly</Option>
            <Option value="monthly">Monthly</Option>
            <Option value="annual">Annual</Option>
          </Select>
        </Col>
      </Row>

      <Row gutter={[32, 32]}>
        <Col md={12} span={24}>
          <SummaryItem
            chartData={data1}
            title="Offer"
            type="success"
          />
        </Col>

        <Col md={12} span={24}>
          <SummaryItem
            chartData={data2}
            title="Favorite"
            type="danger"
            arrowDown={true}
          />
        </Col>
      </Row>
    </>
  );
}
