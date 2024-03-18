import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import { searchProduct, priceFilter } from '../../../../redux/ecommerce/ecommerceActions';

import { Row, Col, Button, Input, Select } from "antd";

const { Option } = Select;

export default function Header(props) {
  const searchValue = useSelector(state => state.ecommerce.searchValue)
  const priceFilterValue = useSelector(state => state.ecommerce.priceFilterValue)
  const dispatch = useDispatch()

  return (
    <Row gutter={[16, 16]} className="hp-ecommerce-app-header hp-mb-32">
      <Col flex="1 0 0" className="hp-ecommerce-app-header-search">
        <Input placeholder="Search here" value={searchValue} onChange={(e) => dispatch(searchProduct(e.target.value))} />
      </Col>

      <Col className="hp-ecommerce-app-header-select">
        <Select defaultValue={priceFilterValue} className="hp-w-100" onChange={(e) => dispatch(priceFilter(e))}>
          <Option value="lowest">Lowest</Option>
          <Option value="highest">Highest</Option>
        </Select>
      </Col>

      <Col>
        <Button
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H7.33333V7.33333H2V2ZM2 8.66667H7.33333V14H2V8.66667ZM8.66667 2H14V7.33333H8.66667V2ZM8.66667 8.66667H14V14H8.66667V8.66667ZM10 3.33333V6H12.6667V3.33333H10ZM10 10V12.6667H12.6667V10H10ZM3.33333 3.33333V6H6V3.33333H3.33333ZM3.33333 10V12.6667H6V10H3.33333Z" fill={!props.productListToggle ? '#0010F7' : '#B2BEC3'} />
            </svg>
          }
          onClick={() => props.setProductListToggle(false)}
        ></Button>
      </Col>

      <Col>
        <Button
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33333 2.66659H14V3.99992H5.33333V2.66659ZM3 4.33325C2.73478 4.33325 2.48043 4.2279 2.29289 4.04036C2.10536 3.85282 2 3.59847 2 3.33325C2 3.06804 2.10536 2.81368 2.29289 2.62615C2.48043 2.43861 2.73478 2.33325 3 2.33325C3.26522 2.33325 3.51957 2.43861 3.70711 2.62615C3.89464 2.81368 4 3.06804 4 3.33325C4 3.59847 3.89464 3.85282 3.70711 4.04036C3.51957 4.2279 3.26522 4.33325 3 4.33325ZM3 8.99992C2.73478 8.99992 2.48043 8.89456 2.29289 8.70703C2.10536 8.51949 2 8.26514 2 7.99992C2 7.7347 2.10536 7.48035 2.29289 7.29281C2.48043 7.10528 2.73478 6.99992 3 6.99992C3.26522 6.99992 3.51957 7.10528 3.70711 7.29281C3.89464 7.48035 4 7.7347 4 7.99992C4 8.26514 3.89464 8.51949 3.70711 8.70703C3.51957 8.89456 3.26522 8.99992 3 8.99992ZM3 13.5999C2.73478 13.5999 2.48043 13.4946 2.29289 13.307C2.10536 13.1195 2 12.8651 2 12.5999C2 12.3347 2.10536 12.0803 2.29289 11.8928C2.48043 11.7053 2.73478 11.5999 3 11.5999C3.26522 11.5999 3.51957 11.7053 3.70711 11.8928C3.89464 12.0803 4 12.3347 4 12.5999C4 12.8651 3.89464 13.1195 3.70711 13.307C3.51957 13.4946 3.26522 13.5999 3 13.5999ZM5.33333 7.33325H14V8.66659H5.33333V7.33325ZM5.33333 11.9999H14V13.3333H5.33333V11.9999Z" fill={props.productListToggle ? '#0010F7' : '#B2BEC3'} />
            </svg>
          }
          onClick={() => props.setProductListToggle(true)}
        ></Button>
      </Col>
    </Row>
  )
}