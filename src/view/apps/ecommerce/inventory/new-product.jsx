import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { Row, Col, Checkbox, Upload, message, Button, Input, Card, Divider, Select } from "antd";
import { ArrowDown, ArrowDownSquare, ChevronDownCircle, Discovery, InfoSquare, Plus } from 'react-iconly';
import { RiUploadCloud2Line, RiCheckboxCircleLine, RiCloseCircleLine } from "react-icons/ri";

import BreadCrumbs from '../../../../layout/components/content/breadcrumbs';

const { Dragger } = Upload;
const { TextArea } = Input;
const { Option } = Select;

export default function InventoryNewProduct() {
    // Upload
    const props = {
        name: "file",
        listType: "picture",
        multiple: true,
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        onChange(info) {
            const { status } = info.file;
            console.log(info.file);
            if (status !== "uploading") {
            }
            if (status === "done") {
                message.success({
                    content: <div className="upload-result">
                        {info.file.name}
                    </div>,
                    icon: <RiCheckboxCircleLine className="remix-icon" />,
                });
            } else if (status === "error") {
                message.error({
                    content: info.file.name + ' file upload failed.',
                    icon: <RiCloseCircleLine className="remix-icon" />,
                });
            }
        },
        onDrop() { },
    };

    return (
        <Row gutter={[32, 32]} className="hp-ecommerce-app hp-mb-32">
            <Col span={24}>
                <Row gutter={[32, 32]} justify="space-between">
                    <BreadCrumbs
                        breadCrumbParent="Applications"
                        breadCrumbParent2="E-Commerce"
                        breadCrumbActive="Inventory"
                    />
                </Row>
            </Col>

            <Col span={24}>
                <h2>New Product</h2>
            </Col>

            <Col span={24} className="hp-ecommerce-app-inventory-added">
                <Row gutter={[32, 32]}>
                    <Col flex="1 0 0">
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Card>
                                    <span className="hp-d-block h4 hp-mb-8">Name & Descriptions</span>
                                    <p className="hp-p1-body hp-mb-48">There are three layout for form: horizontal, vertical, inline.</p>

                                    <Row gutter={[24, 24]}>
                                        <Col span={24}>
                                            <span className="hp-d-flex hp-align-items-center hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-mb-8">
                                                Product Title <i className="ri-information-line hp-mx-4" style={{ fontSize: 16, lineHeight: 1, }} /> :
                                            </span>

                                            <Input
                                                placeholder="Placeholder text"
                                            />
                                        </Col>

                                        <Col span={24}>
                                            <span className="hp-d-flex hp-align-items-center hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-mb-8">
                                                Descriptions <i className="ri-information-line hp-mx-4" style={{ fontSize: 16, lineHeight: 1, }} /> :
                                            </span>

                                            <TextArea
                                                rows={4}
                                                placeholder="Pleaceholder Text"
                                                showCount
                                                maxLength={100}
                                            />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            <Col span={24}>
                                <Card>
                                    <span className="hp-d-block h4 hp-mb-8">Images & Gallery</span>
                                    <p className="hp-p1-body hp-mb-48">There are three layout for form: horizontal, vertical, inline.</p>

                                    <Dragger {...props}>
                                        <p className="ant-upload-drag-icon">
                                            <RiUploadCloud2Line className="remix-icon" />
                                        </p>

                                        <p className="ant-upload-text">
                                            Click or drag file to this area to upload
                                        </p>

                                        <p className="ant-upload-hint">
                                            Support for a single or bulk upload. Strictly prohibit from
                                            uploading company data or other band files
                                         </p>
                                    </Dragger>
                                </Card>
                            </Col>

                            <Col span={24}>
                                <Card>
                                    <span className="hp-d-block h4 hp-mb-8">Prices</span>
                                    <p className="hp-p1-body hp-mb-48">There are three layout for form: horizontal, vertical, inline.</p>

                                    <Row gutter={[24, 24]}>
                                        <Col span={24}>
                                            <span className="hp-d-flex hp-align-items-center hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-mb-8">
                                                Product Title <i className="ri-information-line hp-mx-4" style={{ fontSize: 16, lineHeight: 1, }} /> :
                                            </span>

                                            <Input
                                                addonBefore="$"
                                                placeholder="Pleaceholder Text"
                                            />
                                        </Col>
                                    </Row>

                                    <Row gutter={[48, 24]} className="hp-mt-48">
                                        <Col span={24}>
                                            <span className="hp-d-flex hp-align-items-center hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-mb-8">
                                                Allow customers to pay they want  <i className="ri-information-line hp-mx-4" style={{ fontSize: 16, lineHeight: 1, }} /> :
                                            </span>

                                            <Divider className="hp-mt-16 hp-mb-0" />
                                        </Col>

                                        <Col span={24} md={12}>
                                            <span className="hp-d-flex hp-align-items-center hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-mb-8">
                                                Minimum Amount <i className="ri-information-line hp-mx-4" style={{ fontSize: 16, lineHeight: 1, }} /> :
                                            </span>

                                            <Input
                                                addonBefore="$"
                                                placeholder="Pleaceholder Text"
                                            />
                                        </Col>

                                        <Col span={24} md={12}>
                                            <span className="hp-d-flex hp-align-items-center hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-mb-8">
                                                Suggested Amount <i className="ri-information-line hp-mx-4" style={{ fontSize: 16, lineHeight: 1, }} /> :
                                            </span>

                                            <Input
                                                addonBefore="$"
                                                placeholder="Pleaceholder Text"
                                            />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            <Col span={24}>
                                <Card>
                                    <span className="hp-d-block h4 hp-mb-8">Category & Attibutes</span>
                                    <p className="hp-p1-body hp-mb-48">There are three layout for form: horizontal, vertical, inline.</p>

                                    <Row gutter={[24, 24]}>
                                        <Col span={24}>
                                            <span className="hp-d-flex hp-align-items-center hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-mb-8">
                                                Category <i className="ri-information-line hp-mx-4" style={{ fontSize: 16, lineHeight: 1, }} /> :
                                            </span>

                                            <Select placeholder="Select Category" className="hp-w-100">
                                                <Option value="category-1">Category 1</Option>
                                                <Option value="category-2">Category 2</Option>
                                                <Option value="category-3">Category 3</Option>
                                                <Option value="category-4">Category 4</Option>
                                            </Select>
                                        </Col>

                                        <Col span={24}>
                                            <span className="hp-d-flex hp-align-items-center hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-mb-8">
                                                Category <i className="ri-information-line hp-mx-4" style={{ fontSize: 16, lineHeight: 1, }} /> :
                                            </span>

                                            <Row gutter={[24, 24]}>
                                                <Col span={12} sm={8}>
                                                    <Checkbox>Televisions</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>Smart  Technology</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>Televisions</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>TV Wall Brackets</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>TV Wall Brackets</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>TV Wall Brackets</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>TV Aerials</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>TV Aerials</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>TV Aerials</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>DVD & Blu-ray Players</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>DVD & Blu-ray Players</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>DVD & Blu-ray Players</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>Sound Bars</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>Sound Bars</Checkbox>
                                                </Col>

                                                <Col span={12} sm={8}>
                                                    <Checkbox>Sound Bars</Checkbox>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="hp-ecommerce-app-inventory-added-sidebar" flex="0 0 380px">
                        <div>
                            <Card className="hp-mb-16">
                                <span className="hp-d-block h4 hp-mb-18">Preview</span>

                                <div className="hp-border-radius hp-overflow-hidden hp-bg-black-10 hp-bg-dark-90 hp-mb-24 hp-text-center">
                                    <img src={require(`../../../../assets/images/product/action-cam-1.png`)} alt="4K Action Cam" />
                                </div>

                                <Row justify="space-between">
                                    <Col>
                                        <span className="hp-d-block h4 hp-mb-16">4K Action Cam</span>
                                        <span className="hp-d-block hp-p1-body">Touch LCD Screen Zero Ink Camera</span>
                                    </Col>

                                    <Col>
                                        <span className="hp-d-block hp-p1-body hp-text-color-primary-1">$49.00</span>
                                    </Col>
                                </Row>
                            </Card>

                            <Button block>Save Draft</Button>

                            <Button type="primary" block className="hp-mt-8">Publish Now</Button>

                            <span className="hp-mt-16 hp-p1-body hp-d-flex-full-center">
                                <i className="ri-time-line hp-mr-8" style={{ fontSize: 18, lineHeight: 1 }} /> Last saved Dec 5, 2022 - 23:23
                            </span>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}