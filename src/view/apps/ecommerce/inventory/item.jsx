import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { Row, Col, Avatar, Checkbox, Tag, Button, Input } from "antd";
import { ArrowDown, ArrowDownSquare, ChevronDownCircle, Discovery, InfoSquare, Plus } from 'react-iconly';

import BreadCrumbs from '../../../../layout/components/content/breadcrumbs';

export default function InventoryItem(props) {
    const [detailCheckClass, setDetailCheckClass] = useState("")
    const [detailCheck, setDetailCheck] = useState(false)

    useEffect(() => {
        if (detailCheck) {
            setTimeout(() => {
                setDetailCheckClass(" active")
            }, 100);
        } else {
            setDetailCheckClass("")
        }
    }, [detailCheck])

    return (
        props && (
            <div className="hp-inventory-body-row" key={props.id}>
                <div className="hp-d-flex hp-w-100">
                    <div className="hp-inventory-body-row-item item-checkbox">
                        <Checkbox />
                    </div>

                    <div className="hp-inventory-body-row-item item-img">
                        <Avatar
                            size={64}
                            src={require(`../../../../assets/images/product/${props.img}`)}
                            className="hp-bg-black-0 hp-bg-dark-100 hp-border-1"
                        />
                    </div>

                    <div className="hp-inventory-body-row-item item-sku">
                        <span className="hp-p1-body hp-text-color-primary-1">{props.sku}</span>
                    </div>

                    <div className="hp-inventory-body-row-item item-name">
                        <span>{props.title}</span>
                    </div>

                    <div className="hp-inventory-body-row-item item-price">
                        <span>{props.price}</span>
                    </div>

                    <div className="hp-inventory-body-row-item item-status">
                        {
                            props.status === "Active" ? (
                                <Tag color="success" className="hp-px-12">
                                    <span className="hp-d-flex hp-align-items-center">
                                        <InfoSquare set="curved" className="remix-icon" size={12} />
                                        <span className="hp-ml-4">Active</span>
                                    </span>
                                </Tag>
                            ) : (
                                props.status === "Deactive" && (
                                    <Tag color="warning" className="hp-px-12">
                                        <span className="hp-d-flex hp-align-items-center">
                                            <InfoSquare set="curved" className="remix-icon" size={12} />
                                            <span className="hp-ml-4">Deactive</span>
                                        </span>
                                    </Tag>
                                )
                            )
                        }
                    </div>

                    <div className="hp-inventory-body-row-item item-stock">
                        <span>{props.stock}</span>
                    </div>

                    <div className={`hp-inventory-body-row-item item-details hp-d-flex-end${detailCheckClass}`}>
                        <div className="hp-cursor-pointer" onClick={() => setDetailCheck(!detailCheck)}>
                            <ChevronDownCircle set="curved" />
                        </div>
                    </div>
                </div>

                {
                    detailCheck && (
                        <div className={`hp-inventory-body-row-detail${detailCheckClass}`}>
                            <Row align="middle">
                                <Col>
                                    <div className="hp-border-radius hp-overflow-hidden hp-inventory-body-row-detail-img">
                                        <img src={require(`../../../../assets/images/product/${props.img}`)} alt={props.title} />
                                    </div>
                                </Col>

                                <Col flex="1 0 0">
                                    <Row>
                                        <Col span={24} lg={12}>
                                            <Row>
                                                <Col span={24}>
                                                    <div className="hp-inventory-body-row-detail-item">
                                                        <span>Product Name</span>

                                                        <span>{props.title}</span>
                                                    </div>
                                                </Col>

                                                <Col span={12}>
                                                    <div className="hp-inventory-body-row-detail-item">
                                                        <span>ID Number</span>

                                                        <span>{props.sku}</span>
                                                    </div>
                                                </Col>

                                                <Col span={12}>
                                                    <div className="hp-inventory-body-row-detail-item">
                                                        <span>Production Year</span>

                                                        <span>{props.year}</span>
                                                    </div>
                                                </Col>

                                                <Col span={12}>
                                                    <div className="hp-inventory-body-row-detail-item">
                                                        <span>Merk Brand</span>

                                                        <span>{props.brand}</span>
                                                    </div>
                                                </Col>

                                                <Col span={12}>
                                                    <div className="hp-inventory-body-row-detail-item">
                                                        <span>Made In</span>

                                                        <span>{props.madeIn}</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col span={24} lg={12}>
                                            <Row>
                                                <Col span={12}>
                                                    <div className="hp-inventory-body-row-detail-item">
                                                        <span>Normal Price</span>

                                                        <span>{props.price}</span>
                                                    </div>
                                                </Col>

                                                <Col span={12}>
                                                    <div className="hp-inventory-body-row-detail-item">
                                                        <span>Size</span>

                                                        <span>{props.size}</span>
                                                    </div>
                                                </Col>

                                                <Col span={12}>
                                                    <div className="hp-inventory-body-row-detail-item">
                                                        <span>Discount</span>

                                                        <span>{props.discount}</span>
                                                    </div>
                                                </Col>

                                                <Col span={12}>
                                                    <div className="hp-inventory-body-row-detail-item">
                                                        <span>Stock</span>

                                                        <span>{props.stock}</span>
                                                    </div>
                                                </Col>

                                                <Col span={12}>
                                                    <div className="hp-inventory-body-row-detail-item">
                                                        <span>Discount Price</span>

                                                        <span>{props.discountPrice}</span>
                                                    </div>
                                                </Col>

                                                <Col span={12}>
                                                    <div className="hp-inventory-body-row-detail-item">
                                                        <span>Status</span>

                                                        <span>{props.status}</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    )
                }
            </div>
        )
    );
}