import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Divider, Switch, Button } from "antd";

export default function SecurityProfile() {
  const dividerClass = "hp-border-color-black-40 hp-border-color-dark-80";

  return (
    <div className="hp-profile-security">
      <h2>Configuracion de seguridad</h2>

      <Divider className={dividerClass} />

  

      <Row align="middle" justify="space-between">
        <Col md={12}>
          <h3>Cambiar contraseña</h3>
          <p className="hp-p1-body hp-mb-0">
          Establezca una contraseña única para proteger su cuenta.
          </p>
        </Col>

        <Col className="hp-mt-md-24">
          <Link to="/pages/profile/password-change">
            <Button type="primary">Cambiar contraseña</Button>
          </Link>
        </Col>
      </Row>

      <Divider className={dividerClass} />

      <Row align="middle" justify="space-between">
        <Col md={12}>
          <h3>Google Authenticator</h3>
          <p className="hp-p1-body hp-mb-0">
          Proteja su cuenta con seguridad 2FA. Cuando esté activado podrás
             Debe ingresar no solo su contraseña, sino también un código especial usando
             aplicación. Puede recibir este código en la aplicación móvil.
          </p>
        </Col>

        <Col className="hp-mt-md-24">
          <Button type="primary">Disable</Button>
        </Col>
      </Row>
    </div>
  );
}
