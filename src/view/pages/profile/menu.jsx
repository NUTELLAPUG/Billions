import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import { Col, Avatar, Badge, Menu } from "antd";
import {
  User,
  Notification,
  Activity,
  Setting,
  Password,
  Heart,
} from "react-iconly";

import menuImg from "../../../assets/images/pages/profile/menu-img.svg";
import avatar from "../../../assets/images/memoji/user-avatar-4.png";

export default function MenuProfile(props) {
  const userData = useSelector((state) => state.userData.userData);
  const menuIconClass = "remix-icon hp-mr-8";

  function menuFooterItem() {
    if (props.footer !== "none") {
      return (
        <div className="hp-profile-menu-footer">
          <img src={menuImg} alt="Profile Image" />
        </div>
      );
    }
  }

  function moreBtn() {
    if (props.moreBtnCheck !== "none") {
      return (
        <Col className="hp-menu-header-btn hp-pr-16 hp-mb-12 hp-text-right">
          {props.moreBtn()}
        </Col>
      );
    }
  }

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  // Redux
  const customise = useSelector(state => state.customise)

  return (
    <Col flex="240px" className="hp-profile-menu hp-py-24">
      <div className="hp-w-100">
        <div className="hp-profile-menu-header hp-text-center">
          {moreBtn()}

          <Badge count={1000}>
          <Avatar
            size={60}
            src={userData? userData.avatar : ""}
            className="hp-bg-info-4 hp-mr-8"
            style={{ borderRadius: '80%' }} // Aplicar un borde redondeado al 50%
          />

          </Badge>

          <h3 className="hp-mt-24 hp-mb-4">{userData? userData.firstName : ""} {userData? userData.lastName : ""}</h3>
          <a href={`mailto:${userData? userData.email : ""}`} className="hp-p1-body">
          {userData? userData.email : ""} 
          </a>
        </div>

        <Menu
          mode="inline"
          className="hp-w-100 hp-profile-menu-body"
          theme={customise.theme == "light" ? "light" : "dark"}
        >
          <Menu.Item
            key="1"
            icon={<User set="curved" className={menuIconClass} />}
            className={`
              hp-mb-16 hp-pl-24 hp-pr-32
              ${splitLocation[splitLocation.length - 1] === "personel-information"
                ? "ant-menu-item-selected"
                : "ant-menu-item-selected-in-active"}
            `}
            onClick={props.onCloseDrawer}
          >
            <Link to="/pages/profile/personel-information">
              Informacion personal
            </Link>
          </Menu.Item>

          <Menu.Item
            key="4"
            icon={<Setting set="curved" className={menuIconClass} />}
            className={`
              hp-mb-16 hp-pl-24 hp-pr-32
              ${splitLocation[splitLocation.length - 1] === "security"
                ? "ant-menu-item-selected"
                : "ant-menu-item-selected-in-active"}
            `}
            onClick={props.onCloseDrawer}
          >
            <Link to="/pages/profile/security">Seguridad</Link>
          </Menu.Item>

          <Menu.Item
            key="5"
            icon={<Password set="curved" className={menuIconClass} />}
            className={`
              hp-mb-16 hp-pl-24 hp-pr-32
              ${splitLocation[splitLocation.length - 1] === "password-change"
                ? "ant-menu-item-selected"
                : "ant-menu-item-selected-in-active"}
            `}
            onClick={props.onCloseDrawer}
          >
            <Link to="/pages/profile/password-change">Cambiar contraseña</Link>
          </Menu.Item>

         
        </Menu>
      </div>

    </Col>
  );
}
