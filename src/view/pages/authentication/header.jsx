import React from 'react'

import { Col, Row } from 'antd'
import { Messages1 } from 'iconsax-react'

import MenuLogo from '../../../layout/components/menu/logo'

export default function Header() {
    return (
        <Row align="middle" justify="space-between" className="hp-px-sm-16 hp-px-64 hp-py-16 hp-mb-48 hp-border-bottom-1 hp-border-color-dark-70">
            <Col>
                <MenuLogo />
            </Col>

            <Col>
                <Row align="middle">
                    <span className="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 hp-mr-24 hp-d-block hp-auth-header-title">Need Help?</span>
                    <a href="#" className="hp-d-flex-center">
                        <Messages1
                            size="24"
                            variant="Bold"
                            className="hp-text-color-black-100 hp-text-color-dark-0"
                        />
                        <span className="hp-ml-6 hp-d-block hp-p1-body hp-text-color-black-100 hp-text-color-dark-0">Support</span>
                    </a>
                </Row>
            </Col>
        </Row>
    )
}
