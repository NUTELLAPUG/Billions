import React, { useState } from 'react'
import { useSelector } from "react-redux";

import { Row, Col, Button, Drawer, List } from "antd";

import BreadCrumbs from '../../../../layout/components/content/breadcrumbs';
import Sidebar from './Sidebar';
import Header from './Header';
import Product from './Product';
import ProductLarge from './ProductLarge';

export default function Shop() {
  const [productListToggle, setProductListToggle] = useState(false)

  // Redux
  const products = useSelector(state => state.ecommerce.products)
  const searchValue = useSelector(state => state.ecommerce.searchValue)
  const priceFilterValue = useSelector(state => state.ecommerce.priceFilterValue)

  const productsFilters = products.filter((item) => {
    return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  })

  productsFilters.sort((a, b) => {
    if (a.discount !== '' && b.discount !== '') {
      if (parseFloat(a.discount) > parseFloat(b.discount)) {
        return priceFilterValue === "lowest" ? 1 : -1
      }

      if (parseFloat(a.discount) < parseFloat(b.discount)) {
        return priceFilterValue === "lowest" ? -1 : 1
      }
    } else {
      if (parseFloat(a.price) > parseFloat(b.price)) {
        return priceFilterValue === "lowest" ? 1 : -1
      }

      if (parseFloat(a.price) < parseFloat(b.price)) {
        return priceFilterValue === "lowest" ? -1 : 1
      }
    }

    if (a.discount === '') {
      if (parseFloat(a.price) > parseFloat(b.discount)) {
        return priceFilterValue === "lowest" ? 1 : -1
      }

      if (parseFloat(a.price) < parseFloat(b.discount)) {
        return priceFilterValue === "lowest" ? -1 : 1
      }
    }

    if (b.discount === '') {
      if (parseFloat(a.discount) > parseFloat(b.price)) {
        return priceFilterValue === "lowest" ? 1 : -1
      }

      if (parseFloat(a.discount) < parseFloat(b.price)) {
        return priceFilterValue === "lowest" ? -1 : 1
      }
    }
  })

  const pagiCheck = productsFilters.length <= 6 ? null : { pageSize: 6 }
  const pagiCheckLarge = productsFilters.length <= 3 ? null : { pageSize: 3 }

  // Sidebar Mobile
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Row gutter={32} className="hp-ecommerce-app hp-mb-32">
      <Col className="hp-mb-32" span={24}>
        <Row gutter={[32, 32]}>
          <BreadCrumbs
            breadCrumbParent="Applications"
            breadCrumbParent2="E-Commerce"
            breadCrumbActive="Shop Grid"
          />
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={[32, 32]}>
          <Col span={24} className="hp-ecommerce-app-sidebar-mobile-btn">
            <Button type="primary" block onClick={showDrawer}>
              Filters
            </Button>
          </Col>

          <Drawer
            title="Filters"
            placement="left"
            closable={true}
            onClose={onClose}
            visible={visible}
            key="left"
            className="hp-ecommerce-app-sidebar-mobile"
          >
            <Sidebar />
          </Drawer>

          <Sidebar />

          <Col flex="1 0 0" className="hp-ecommerce-app-content">
            <Header productListToggle={productListToggle} setProductListToggle={setProductListToggle} />

            {
              !productListToggle ? (
                <List
                  pagination={pagiCheck}
                  dataSource={productsFilters}
                  renderItem={value => (
                    <Product value={value} />
                  )}
                />
              ) : (
                <List
                  pagination={pagiCheckLarge}
                  dataSource={productsFilters}
                  renderItem={value => (
                    <ProductLarge value={value} />
                  )}
                />
              )
            }
          </Col>
        </Row>
      </Col>
    </Row>
  )
}