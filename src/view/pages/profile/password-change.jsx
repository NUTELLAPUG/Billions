import React, { useState } from "react";

import { Row, Col, Divider, Form, Input, Button, message } from "antd";
import AxiosInstance from "../../../axiosInstance";
import Cookies from "js-cookie";
import { SHA256 } from "crypto-js";

export default function PasswordProfile() {
  const dividerClass = "hp-border-color-black-40 hp-border-color-dark-80";
  const token = Cookies.get("token");

  const [formValues, setFormValues] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const handleSubmit = async (values) => {
    try {
      // Hashea las contraseñas antes de enviarlas al servidor
      const hashedOldPassword = SHA256(values.oldpassword).toString();
      const hashedNewPassword = SHA256(values.newpassword).toString();
      const hashedConfirmPassword = SHA256(values.confirmpassword).toString();

      const response = await AxiosInstance.post('/api/cambiar-contrasena/', {
        oldpassword: hashedOldPassword,
        newpassword: hashedNewPassword,
        confirmpassword: hashedConfirmPassword,
      }, {
        headers: {
          Authorization: token,
        },
      });
  
      if (response.data.status === false) {
        message.error(response.data.message);
      } else {
        message.success(response.data.message);

        setFormValues({
          oldpassword: "",
          newpassword: "",
          confirmpassword: "",
        });
      }
    } catch (error) {
      message.error('Error al cambiar la contraseña');
    }
  };

  return (
    <Row>
      <Col span={24}>
        <h2>Cambiar contraseña</h2>
        <p className="hp-p1-body hp-mb-0">
        Establezca una contraseña única para proteger su cuenta.
         </p>

        <Divider className={dividerClass} />
      </Col>

      <Col xxl={5} xl={10} md={15} span={24}>
       <Form
          layout="vertical"
          name="basic"
          onFinish={handleSubmit} // Aquí utilizamos la función handleSubmit
        >
          <Form.Item
  label={
    <span className="hp-input-label hp-text-color-black-100 hp-text-color-dark-0">
      Contraseña actual :
    </span>
  }
  name="oldpassword"
>
  <Input
    placeholder="Contraseña actual"
    value={formValues.oldpassword}
    onChange={(e) =>
      setFormValues({ ...formValues, oldpassword: e.target.value })
    }
  />
</Form.Item>

<Form.Item
  label={
    <span className="hp-input-label hp-text-color-black-100 hp-text-color-dark-0">
      Nueva contraseña
    </span>
  }
  name="newpassword"
>
  <Input
    placeholder="Nueva contraseña"
    value={formValues.newpassword}
    onChange={(e) =>
      setFormValues({ ...formValues, newpassword: e.target.value })
    }
  />
</Form.Item>

<Form.Item
  label={
    <span className="hp-input-label hp-text-color-black-100 hp-text-color-dark-0">
      Confirma nueva contraseña
    </span>
  }
  name="confirmpassword"
>
  <Input
    placeholder="Confirma nueva contraseña"
    value={formValues.confirmpassword}
    onChange={(e) =>
      setFormValues({ ...formValues, confirmpassword: e.target.value })
    }
  />
</Form.Item>


          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Cambiar contraseña
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}