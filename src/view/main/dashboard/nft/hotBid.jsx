import React, { useRef, useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Swiper from "react-id-swiper";
import { Row, Col } from "antd";
import { ChevronLeft, ChevronRight } from "react-iconly";

import slideAvatar1 from "../../../../assets/images/memoji/memoji-6.png";
import slideAvatar2 from "../../../../assets/images/memoji/memoji-5.png";
import slideAvatar3 from "../../../../assets/images/memoji/memoji-4.png";
import slideImage1 from "../../../../assets/images/dasboard/nft-slide-image-1.png";
import slideImage2 from "../../../../assets/images/dasboard/nft-slide-image-2.png";
import slideImage3 from "../../../../assets/images/dasboard/nft-slide-image-3.png";
import slideImage4 from "../../../../assets/images/dasboard/nft-slide-image-4.png";
import HotBidItem from "./hotBidItem";

export default function HotBidNFT() {
  // Slide Check (For Direction Changed)
  const direction = useSelector(state => state.customise.direction)

  const [swiperCheck, setSwiperCheck] = useState(true)

  useEffect(() => {
    setSwiperCheck(false)

    setTimeout(() => {
      setSwiperCheck(true)
    }, 100);
  }, [direction])

  // Slide Data
  const collectiblesData = [
    {
      bg: slideImage1,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
        {
          img: slideAvatar2,
        },
        {
          img: slideAvatar3,
        },
      ]
    },
    {
      bg: slideImage2,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
        {
          img: slideAvatar2,
        },
      ]
    },
    {
      bg: slideImage3,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
      ]
    },
    {
      bg: slideImage4,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: []
    },
    {
      bg: slideImage1,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
      ]
    },
  ]

  const artData = [
    {
      bg: slideImage2,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
        {
          img: slideAvatar2,
        },
        {
          img: slideAvatar3,
        },
      ]
    },
  ]

  const sportsData = [
    {
      bg: slideImage2,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
        {
          img: slideAvatar2,
        },
        {
          img: slideAvatar3,
        },
      ]
    },
    {
      bg: slideImage3,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
        {
          img: slideAvatar2,
        },
      ]
    },
    {
      bg: slideImage4,
      title: "Perfect Mess 1",
      lastBid: "1.44 ETH",
      price: "$4,852.23",
      avatars: [
        {
          img: slideAvatar1,
        },
      ]
    },
  ]

  // Slide Params
  const params = {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      1470: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    }
  };

  // Slide Arrow
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  const swiperRef3 = useRef(null);

  const goNext = (tabMenuTitle) => {
    if (tabMenuTitle === "collectibles") {
      if (swiperRef1.current && swiperRef1.current.swiper) {
        swiperRef1.current.swiper.slideNext();
      }
    }

    if (tabMenuTitle === "art") {
      if (swiperRef2.current && swiperRef2.current.swiper) {
        swiperRef2.current.swiper.slideNext();
      }
    }

    if (tabMenuTitle === "sports") {
      if (swiperRef3.current && swiperRef3.current.swiper) {
        swiperRef3.current.swiper.slideNext();
      }
    }
  };

  const goPrev = (tabMenuTitle) => {
    if (tabMenuTitle === "collectibles") {
      if (swiperRef1.current && swiperRef1.current.swiper) {
        swiperRef1.current.swiper.slidePrev();
      }
    }

    if (tabMenuTitle === "art") {
      if (swiperRef2.current && swiperRef2.current.swiper) {
        swiperRef2.current.swiper.slidePrev();
      }
    }

    if (tabMenuTitle === "sports") {
      if (swiperRef3.current && swiperRef3.current.swiper) {
        swiperRef3.current.swiper.slidePrev();
      }
    }
  };

  // Tab Menu
  const [tabMenu, setTabMenu] = useState("collectibles")

  function tabMenuClick(title) {
    setTabMenu(title)
  }

  return (
    <>
      <Row align="middle" justify="space-between" className="hp-mb-32">
        <Col>
          <span className="h3 hp-text-color-black-100 hp-text-color-dark-0">Hot Bid  🔥</span>
        </Col>

        <Col className="hp-order-sm-1 hp-mt-sm-24">
          <Row gutter={[10, 10]} wrap={false} className="hp-overflow-x-auto hp-nft-dashboard-tab-row">
            <Col>
              <div
                className={`${tabMenu === "collectibles" ? "hp-bg-dark-80 hp-bg-black-bg hp-text-color-black-0 hp-text-color-dark-primary-2 " : "hp-bg-dark-100 "} hp-cursor-pointer hp-bg-black-0 hp-text-color-dark-primary-2 hp-border-radius-full hp-py-10 hp-px-36`}
                onClick={() => tabMenuClick("collectibles")}
              >
                Collectibles
              </div>
            </Col>

            <Col>
              <div
                className={`${tabMenu === "art" ? "hp-bg-dark-80 hp-bg-black-bg hp-text-color-black-0 hp-text-color-dark-primary-2 " : "hp-bg-dark-100 "} hp-cursor-pointer hp-bg-black-0 hp-text-color-dark-primary-2 hp-border-radius-full hp-py-10 hp-px-36`}
                onClick={() => tabMenuClick("art")}
              >
                Art
              </div>
            </Col>

            <Col>
              <div
                className={`${tabMenu === "sports" ? "hp-bg-dark-80 hp-bg-black-bg hp-text-color-black-0 hp-text-color-dark-primary-2 " : "hp-bg-dark-100 "} hp-cursor-pointer hp-bg-black-0 hp-text-color-dark-primary-2 hp-border-radius-full hp-py-10 hp-px-36`}
                onClick={() => tabMenuClick("sports")}
              >
                Sports
              </div>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row gutter={[8, 8]}>
            <Col>
              <div
                className="hp-cursor-pointer hp-d-flex-full-center hp-border-radius hp-bg-black-0 hp-bg-dark-100 hp-border-1 hp-border-color-black-40 hp-border-color-dark-80"
                style={{ minWidth: 40, height: 40 }}
                onClick={() => goPrev(tabMenu)}
              >
                <ChevronLeft set="light" className="hp-text-color-dark-primary-1" style={direction === "rtl" ? { transform: "rotate(-180deg)" } : {}} />
              </div>
            </Col>

            <Col>
              <div
                className="hp-cursor-pointer hp-d-flex-full-center hp-border-radius hp-bg-black-0 hp-bg-dark-100 hp-border-1 hp-border-color-black-40 hp-border-color-dark-80"
                style={{ minWidth: 40, height: 40 }}
                onClick={() => goNext(tabMenu)}
              >
                <ChevronRight set="light" className="hp-text-color-dark-primary-1" style={direction === "rtl" ? { transform: "rotate(180deg)" } : {}} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {
        swiperCheck && (
          <>
            {
              tabMenu === "collectibles" && (
                <Swiper {...params} ref={swiperRef1}>
                  {
                    collectiblesData.map((item, index) => (
                      <div key={index}>
                        <HotBidItem item={item} />
                      </div>
                    ))
                  }
                </Swiper>
              )
            }

            {
              tabMenu === "art" && (
                <Swiper {...params} ref={swiperRef2}>
                  {
                    artData.map((item, index) => (
                      <div key={index}>
                        <HotBidItem item={item} index={index} />
                      </div>
                    ))
                  }
                </Swiper>
              )
            }

            {
              tabMenu === "sports" && (
                <Swiper {...params} ref={swiperRef3}>
                  {
                    sportsData.map((item, index) => (
                      <div key={index}>
                        <HotBidItem item={item} index={index} />
                      </div>
                    ))
                  }
                </Swiper>
              )
            }
          </>
        )
      }
    </>
  );
}
