import { Link, useHistory  } from "react-router-dom";
import Cookies from "js-cookie";

import { Dropdown, Col, Divider, Row } from "antd";
import { UserOctagon, Flag, Calendar, Calculator } from 'iconsax-react';
import { useDispatch, useSelector } from "react-redux";

import avatarImg from "../../../assets/images/memoji/user-avatar-4.png";


export default function HeaderUser() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.userData);

  const handleLogout = () => {
    // Remove the JWT token cookie and redirect to the login page
    dispatch({ type: "CLEAR_USER_DATA" });
    Cookies.remove("token");
    history.push("/login");
    
  };

  const menu = (
    <div className="hp-user-dropdown hp-border-radius hp-bg-black-0 hp-bg-dark-100 hp-border-color-dark-80 hp-py-24 hp-px-18 hp-mt-16">

      <Row gutter={[0, 24]}>
        <Col span={24}>
          <Link
            to="/pages/profile/security"
            className="hp-p1-body hp-font-weight-500 hp-hover-text-color-primary-2"
          >
            Configuracion
          </Link>
        </Col>

        <Col span={24}>
          <Link
          to="#"
          className="hp-p1-body hp-font-weight-500 hp-hover-text-color-primary-2"
          onClick={handleLogout}
        >
          Salir
        </Link>
        </Col>
      </Row>
    </div>
  );

  return (
    <Col>
      <Dropdown overlay={menu} placement="bottomLeft">
        <div className="hp-border-radius-xl hp-cursor-pointer hp-border-1 hp-border-color-dark-80">
          <div className="hp-border-radius-lg hp-overflow-hidden hp-bg-info-4 hp-m-4 hp-d-flex" style={{ minWidth: 32, width: 32, height: 32 }}>
            <img   src={userData? userData.avatar : ""} alt="User" height="100%" />
          </div>
        </div>
      </Dropdown>
    </Col>
  );
};
