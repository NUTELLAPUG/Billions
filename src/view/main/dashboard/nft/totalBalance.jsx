import React from "react";

import { useSelector } from "react-redux";

import { Row, Col } from "antd";

import bitcoinLogo from "../../../../assets/images/dasboard/bitcoin-logo.png";
import smallCardBg from "../../../../assets/images/dasboard/nft-bitcoin-card-bg.png";
import SmallCardItem from "../../widgets/cards/advance/smallCardItem";

export default function TotalBalanceNFT() {
  const direction = useSelector(state => state.customise.direction)

  return (
    <>
      <Row align="middle" justify="space-between" className="hp-mb-24">
        <Col md={17} span={12}>
          <span className="h3 hp-text-color-black-100 hp-text-color-dark-0">Total Balance</span>
        </Col>

        <Col>
          <a href="#" className="hp-d-flex-center">
            <span className="hp-p1-body hp-text-color-black-80 hp-text-color-dark-20 hp-mr-4">View All</span>

            <div style={direction === "rtl" ? { transform: "rotate(180deg)" } : {}} className="hp-d-flex">
              <svg className="hp-fill-dark-20" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00016 0.833374C3.32016 0.833374 0.333496 3.82004 0.333496 7.50004C0.333496 11.18 3.32016 14.1667 7.00016 14.1667C10.6802 14.1667 13.6668 11.18 13.6668 7.50004C13.6668 3.82004 10.6802 0.833374 7.00016 0.833374ZM9.68683 7.85337L7.68683 9.85337C7.58683 9.95337 7.46016 10 7.3335 10C7.20683 10 7.08016 9.95337 6.98016 9.85337C6.78683 9.66004 6.78683 9.34004 6.98016 9.14671L8.12683 8.00004H4.66683C4.3935 8.00004 4.16683 7.77337 4.16683 7.50004C4.16683 7.22671 4.3935 7.00004 4.66683 7.00004H8.12683L6.98016 5.85337C6.78683 5.66004 6.78683 5.34004 6.98016 5.14671C7.1735 4.95337 7.4935 4.95337 7.68683 5.14671L9.68683 7.14671C9.88016 7.34004 9.88016 7.66004 9.68683 7.85337Z" fill="#292D32" />
              </svg>
            </div>
          </a>
        </Col>
      </Row>

      <SmallCardItem
        logo={bitcoinLogo}
        bg={smallCardBg}
        number={1923}
        value={1.90124523}
        title="Bitcoin"
      />
    </>
  );
}
