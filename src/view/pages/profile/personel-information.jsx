import React, { useState } from "react";

import {
  Row,
  Col,
  Divider,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Modal,
  Select,
  message,
} from "antd";
import { motion } from "framer-motion"; // Importa la biblioteca de animación Framer Motion

import { useDispatch, useSelector } from "react-redux";

import { RiCloseFill, RiCalendarLine } from "react-icons/ri";
import AxiosInstance from "../../../axiosInstance";
import Cookies from "js-cookie";
import { setUserData } from "../../../redux/users/userActions";

export default function InfoProfile() {
  const userData = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch(); // Obtiene la función `dispatch` de Redux

  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [preferanceModalVisible, setPreferanceModalVisible] = useState(false);

  const listTitle = "hp-p1-body";
  const listResult = "hp-mt-sm-4 hp-p1-body hp-text-color-black-100 hp-text-color-dark-0";
  const dividerClass = "hp-border-color-black-40 hp-border-color-dark-80";

  const contactModalShow = () => {
    setContactModalVisible(true);
  };

  const contactModalCancel = () => {
    setContactModalVisible(false);
  };

  const preferanceModalShow = () => {
    setPreferanceModalVisible(true);
  };

  const preferanceModalCancel = () => {
    setPreferanceModalVisible(false);
  };

  const handleProfileUpdate = async (values) => {
    try {
      // Validación: Verifica que los campos no estén vacíos
      if (!values.firstName || !values.lastName || !values.email) {
        message.error("Los campos no pueden estar vacíos");
        return; // Detiene la función si los campos están vacíos
      }
  
      const token = Cookies.get("token"); // Obtiene el token de las cookies
  
      const response = await AxiosInstance.put("/api/updateProfile", values, {
        headers: {
          Authorization: token, // Agrega el token al encabezado
        },
      });
  
      if (response.status === 200) {
        dispatch(setUserData({
          ...userData, // Mantén los datos existentes del usuario
          firstName: values.firstName, // Actualiza el nombre
          lastName: values.lastName, // Actualiza el apellido
          email: values.email,
          // Agrega otras propiedades que necesitas actualizar
        }));
        message.success("Perfil actualizado con éxito.");
        setContactModalVisible(false);
      }
    } catch (error) {
      message.error("Error al actualizar el perfil:", error);
    }
  };
  

  return (
    <div>
      <Modal
        title="Editar mi informacion"
        width={416}
        centered
        visible={contactModalVisible}
        onCancel={contactModalCancel}
        footer={null}
      >
       <Form layout="vertical" name="basic" initialValues={{ remember: true }} onFinish={handleProfileUpdate}>
  <Form.Item
    label="Nombre"
    name="firstName"
    rules={[
      {
        required: true,
        message: "Por favor, ingresa tu nombre",
      },
    ]}
  >
    <Input placeholder={userData ? userData.firstName : ""} />
  </Form.Item>

  <Form.Item
    label="Apellido"
    name="lastName"
    rules={[
      {
        required: true,
        message: "Por favor, ingresa tu apellido",
      },
    ]}
  >
    <Input placeholder={userData ? userData.lastName : ""} />
  </Form.Item>

  <Form.Item
  label="Correo"
  name="email"
  rules={[
    {
      type: "email", // Usar tipo "email" para verificar si es un correo electrónico válido
      message: "Por favor, ingresa un correo electrónico válido",
    },
    {
      required: true,
      message: "Por favor, ingresa tu correo electrónico",
    },
  ]}
>
  <Input />
</Form.Item>

  <Row>
    <Col span={24}>
      <Button block type="primary" htmlType="submit">
        Editar
      </Button>
    </Col>
  </Row>
</Form>
      </Modal>

      <Modal
        title="Preferance Edit"
        width={316}
        centered
        visible={preferanceModalVisible}
        onCancel={preferanceModalCancel}
        footer={null}
        closeIcon={
          <RiCloseFill className="remix-icon text-color-black-100" size={24} />
        }
      >
        <Form layout="vertical" name="basic" initialValues={{ remember: true }}>
          <Form.Item label="Language" name="language">
            <Input />
          </Form.Item>

          <Form.Item label="Date Format" name="dateformat">
            <DatePicker
              className="hp-w-100"
              suffixIcon={
                <RiCalendarLine className="remix-icon hp-text-color-black-60" />
              }
            />
          </Form.Item>

          <Form.Item label="Timezone" name="timezone">
            <TimePicker className="hp-w-100" />
          </Form.Item>

          <Row>
            <Col md={12} span={24} className="hp-pr-sm-0 hp-pr-12">
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={preferanceModalCancel}
              >
                Edit
              </Button>
            </Col>

            <Col md={12} span={24} className="hp-mt-sm-12 hp-pl-sm-0 hp-pl-12">
              <Button block onClick={preferanceModalCancel}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Row align="middle" justify="space-between">
          <Col md={12} span={24}>
            <h3>Información de la cuenta</h3>
          </Col>

          <Col md={12} span={24} className="hp-profile-action-btn hp-text-right">
            <Button type="primary" ghost onClick={contactModalShow}>
              Editar
            </Button>
          </Col>

          <Col
            span={24}
            className="hp-profile-content-list hp-mt-8 hp-pb-sm-0 hp-pb-120"
          >
            <ul>
              <li>
                <span className="hp-p1-body">Nombre</span>
                <span className="hp-mt-sm-4 hp-p1-body hp-text-color-black-100 hp-text-color-dark-0">
                  {userData ? userData.firstName : ""}{" "}
                  {userData ? userData.lastName : ""}
                </span>
              </li>

              <li className="hp-mt-18">
                <span className="hp-p1-body">Usuario</span>
                <span className="hp-mt-sm-4 hp-p1-body hp-text-color-black-100 hp-text-color-dark-0">
                  {userData ? userData.username : ""}
                </span>
              </li>

              <li className="hp-mt-18">
                <span className="hp-p1-body">Correo</span>
                <span className="hp-mt-sm-4 hp-p1-body hp-text-color-black-100 hp-text-color-dark-0">
                  {userData ? userData.email : ""}
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </motion.div>

    

    
    </div>
  );
}
