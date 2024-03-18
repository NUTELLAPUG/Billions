import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';

import { Row, Col, Avatar, Checkbox, Tag, Button, Input, Pagination } from "antd";
import { ArrowDown, ArrowDownSquare, ChevronDownCircle, Discovery, InfoSquare, Plus } from 'react-iconly';

import BreadCrumbs from '../../../../layout/components/content/breadcrumbs';
import InventoryItem from './item';

export default function Inventory() {
    const history = useHistory()

    const [itemArray, setItemArray] = useState([
        {
            id: 1,
            img: 'action-cam-1.png',
            sku: '005094775',
            title: '4K Action Cam',
            price: '$49.00',
            discount: '25%',
            discountPrice: '$36.75',
            status: 'Active',
            stock: '476',
            size: '-',
            year: 'AE24E982',
            brand: 'Sony',
            madeIn: 'Japan',
        },
        {
            id: 2,
            img: 'watch-1.png',
            sku: '125094743',
            title: 'Smart Watches 3',
            price: '$49.00',
            discount: '25%',
            discountPrice: '$36.75',
            status: 'Active',
            stock: '21',
            size: '-',
            year: 'AE24E382',
            brand: 'Sony',
            madeIn: 'Japan',
        },
        {
            id: 3,
            img: 'wireless-bluetooth-1.png',
            sku: '005093475',
            title: 'JBL On-ear Wireless NXTG',
            price: '$49.00',
            discount: '25%',
            discountPrice: '$36.75',
            status: 'Active',
            stock: '676',
            size: '-',
            year: 'A234E282',
            brand: 'JBL',
            madeIn: 'America',
        },
        {
            id: 4,
            img: 'wifi-1.png',
            sku: '005093475',
            title: 'Router Dual-band',
            price: '$49.00',
            discount: '25%',
            discountPrice: '$36.75',
            status: 'Deactive',
            stock: '676',
            size: '-',
            year: 'A234E282',
            brand: 'Xiaomi',
            madeIn: 'Chinese',
        },
        {
            id: 5,
            img: 'white-cam-1.png',
            sku: '005093475',
            title: 'Instant Digital Camera',
            price: '$49.00',
            discount: '25%',
            discountPrice: '$36.75',
            status: 'Active',
            stock: '676',
            size: '-',
            year: 'A234E282',
            brand: 'Polaroid',
            madeIn: 'Netherlands',
        },
    ])

    return (
        <Row gutter={[32, 32]} className="hp-ecommerce-app hp-mb-32">
            <Col span={24}>
                <Row gutter={[32, 32]} justify="space-between">
                    <BreadCrumbs
                        breadCrumbParent="Applications"
                        breadCrumbParent2="E-Commerce"
                        breadCrumbActive="Inventory"
                    />

                    <Col span={24} md={12}>
                        <Row gutter={[16, 16]} justify="end" className="hp-ecommerce-app-inventory-events">
                            <Col flex="0 0 250px">
                                <Input
                                    placeholder="Search Products"
                                    prefix={<Discovery set="curved" className="remix-icon" size={18} />}
                                />
                            </Col>

                            <Col>
                                <Button type="primary" onClick={() => history.push('/apps/ecommerce/inventory-new-product')}>
                                    <Plus set="curved" size={18} />
                                    <span class="hp-ml-8">New Product</span>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>

            <Col span={24}>
                <h2>Inventory</h2>
            </Col>

            <Col span={24} className="hp-ecommerce-app-inventory">
                <div className="hp-inventory-container">
                    <div className="hp-inventory-header">
                        <div className="hp-inventory-header-item item-sku">
                            <span className="hp-caption hp-text-uppercase">SKU</span>
                        </div>

                        <div className="hp-inventory-header-item item-name">
                            <span className="hp-caption hp-text-uppercase">Product Name</span>
                        </div>

                        <div className="hp-inventory-header-item item-price">
                            <span className="hp-caption hp-text-uppercase">Price</span>
                        </div>

                        <div className="hp-inventory-header-item item-status">
                            <span className="hp-caption hp-text-uppercase">Status</span>
                        </div>

                        <div className="hp-inventory-header-item item-stock">
                            <span className="hp-caption hp-text-uppercase">Stock</span>
                        </div>

                        <div className="hp-inventory-header-item item-details hp-d-flex-end">
                            <span className="hp-caption hp-text-uppercase">Details</span>
                        </div>
                    </div>

                    <div className="hp-inventory-body">
                        {
                            itemArray.map((value, index) => (
                                <InventoryItem
                                    id={value.id}
                                    img={value.img}
                                    sku={value.sku}
                                    title={value.title}
                                    price={value.price}
                                    discount={value.discount}
                                    discountPrice={value.discountPrice}
                                    status={value.status}
                                    stock={value.stock}
                                    size={value.size}
                                    year={value.year}
                                    brand={value.brand}
                                    madeIn={value.madeIn}
                                />
                            ))
                        }
                    </div>
                </div>
            </Col>

            <Col span={24}>
                <Row justify="end">
                    <Pagination defaultCurrent={1} total={20} />
                </Row>
            </Col>
        </Row>
    );
}