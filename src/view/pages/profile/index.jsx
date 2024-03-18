import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import { Row, Col, Drawer, Button, Dropdown, Menu, Upload, message } from "antd";
import { RiMore2Line, RiMenuFill, RiCloseFill, RiUploadCloud2Fill } from "react-icons/ri";

import Breadcrumbs from "../../../layout/components/content/breadcrumbs";
import ActionButton from "../../../layout/components/content/action-button";
import InfoProfile from "./personel-information";
import NotificationsProfile from "./notifications";
import MenuProfile from "./menu";
import ActivityProfile from "./activity";
import SecurityProfile from "./security";
import PasswordProfile from "./password-change";
import SocialProfile from "./connect-with-social";
import AxiosInstance from "../../../axiosInstance";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../redux/users/userActions";

export default function Profile() {
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para almacenar la información de la imagen seleccionada
  const serverAddress = `http://${window.location.hostname}:3002/api/upload`;
  const token = Cookies.get("token"); // Obtiene el token de las cookies
  const userData = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch(); // Obtiene la función `dispatch` de Redux

  const handleImageBeforeUpload = (file) => {
    // Captura la información del archivo seleccionado
    setSelectedImage(file);

    handleImageUpload(file)
    return true; // Evita la carga automática de la imagen
  };
  
  const handleImageUpload = async (options) => {
    // Configura la solicitud para subir la imagen
    const formData = new FormData();
    formData.append('image', options); // Adjunta el archivo seleccionado al formulario

    try {
      const response = await AxiosInstance.post('/api/updateProfileImagec', formData, {
        headers: {
          Authorization: token,
        },
      });
  
      if (response.status === 200) {
        dispatch(setUserData({
          ...userData, // Mantén los datos existentes del usuario
          avatar: response.data.imageUrl, // Actualiza el nombre
          // Agrega otras propiedades que necesitas actualizar
        }));
        message.success("Imagen de perfil actualizada con éxito");
      } else {
        message.error("Error al actualizar la imagen de perfil");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      message.error("Error en la solicitud");
    }
  };
  

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const rateMenu = (
    <Menu>
    <Menu.Item key="0">
      <Upload
      name="image"
       action={serverAddress}
        beforeUpload={handleImageBeforeUpload}
        showUploadList={false}
        accept="image/*"
        maxCount={1}
      >
        <Button icon={<RiUploadCloud2Fill />}>Cambiar imagen de perfil</Button>
      </Upload>
    </Menu.Item>
  </Menu>
  
  );

  function moreBtn() {
    return (
      <Dropdown overlay={rateMenu} placement="bottomLeft">
        <Button
          type="text"
          icon={<RiMore2Line className="hp-text-color-black-100 hp-text-color-dark-0" size={24} />}
        ></Button>
      </Dropdown>
    );
  }

  return (
    <Row gutter={[16, 16]}>
      <Drawer
        title={moreBtn()}
        className="hp-profile-mobile-menu"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        closeIcon={
          <RiCloseFill
            className="remix-icon hp-text-color-black-80"
            size={24}
          />
        }
      >
        <MenuProfile
          onCloseDrawer={onClose}
          moreBtnCheck="none"
          footer="none"
        />
      </Drawer>

  

      <Col span={24}>
        <Row className="hp-profile-mobile-menu-btn hp-bg-color-black-0 hp-bg-color-dark-100 hp-border-radius hp-py-12">
          <Button
            className="hp-p-0"
            type="text"
            icon={
              <RiMenuFill
                size={24}
                className="remix-icon hp-text-color-black-80 hp-text-color-dark-30"
              />
            }
            onClick={showDrawer}
          ></Button>
        </Row>

        <Row className="hp-bg-color-black-0 hp-bg-color-dark-100 hp-border-radius hp-pr-sm-16 hp-pr-32">
          <MenuProfile moreBtn={moreBtn} />

          <Col
            flex="1 1"
            className="hp-pl-sm-16 hp-pl-32 hp-py-sm-24 hp-py-32 hp-pb-24 hp-overflow-hidden"
          >
            <Switch>
              <Route path="/pages/profile/personel-information" exact>
                <InfoProfile />
              </Route>

              <Route path="/pages/profile/notifications">
                <NotificationsProfile />
              </Route>

              <Route path="/pages/profile/activity">
                <ActivityProfile />
              </Route>

              <Route path="/pages/profile/security">
                <SecurityProfile />
              </Route>

              <Route path="/pages/profile/password-change">
                <PasswordProfile />
              </Route>

              <Route path="/pages/profile/connect-with-social">
                <SocialProfile />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}