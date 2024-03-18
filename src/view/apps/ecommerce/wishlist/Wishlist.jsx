import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { Row, Col, List, Empty, Button } from "antd";

import BreadCrumbs from '../../../../layout/components/content/breadcrumbs';
import WishlistProduct from './WishlistProduct';

import EmptyImage from '../../../../assets/images/apps/ecommerce/wishlist-empty.svg';

export default function Wishlist() {
  const wishlist = useSelector(state => state.ecommerce.wishlist)

  const wishlistCurrent = wishlist.filter((item) => item.wishCheck == true)
  const [pagiCheck, setPagiCheck] = useState(wishlistCurrent.length <= 6 ? null : { pageSize: 6 })

  return (
    <Row gutter={[32, 32]} className="hp-ecommerce-app hp-mb-32">
      <Col span={24}>
        <Row gutter={[32, 32]}>
          <BreadCrumbs
            breadCrumbParent="Applications"
            breadCrumbParent2="E-Commerce"
            breadCrumbActive="Wishlist"
          />
        </Row>
      </Col>

      <Col span={24} className="hp-ecommerce-app-content">
        {
          wishlistCurrent.length !== 0 ? (
            <List
              pagination={pagiCheck}
              dataSource={wishlistCurrent}
              renderItem={value => (
                <WishlistProduct value={value} />
              )}
            />
          ) : (
            <Empty
              className="hp-mt-32"
              image={EmptyImage}
              imageStyle={{
                height: 160,
              }}
              description={
                <h5>Your Whishlist is empty</h5>
              }
            >
              <Button type="primary">
                <Link to="/apps/ecommerce/shop">Go to shop list</Link>
              </Button>
            </Empty>
          )
        }
      </Col>
    </Row>
  );
}