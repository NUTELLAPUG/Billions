import React, { useState } from "react";

import { Row, Col, Form, Input, Button, message } from "antd";
import { SHA256 } from 'crypto-js';
import Background from "../background";
import Header from "../header";
import Footer from "../footer";
import AxiosInstance from "../../../../axiosInstance";
import { Link, useHistory } from "react-router-dom";

export default function RecoverPassword() {
  const [username, setUsername] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [ConfirmNewPassword, setConfirmNewPassword] = useState("");
  const history = useHistory();

  const [step, setStep] = useState(1); // Controla el paso actual (1: Usuario, 2: Verificación, 3: Nueva contraseña)

  const handleResetPassword = async () => {
    if (step === 1) {
      // Paso 1: Enviar el código de verificación
      try {
        const response = await AxiosInstance.post("/api/send-verification-code", { username }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          message.success("Se ha enviado un correo con el código de verificación.");
          setStep(2); // Avanzar al siguiente paso
        } else {
          message.error("No se pudo enviar el código de verificación. Verifica el nombre de usuario.");
        }
      } catch (error) {
        console.error("Error:", error);
        message.error("Error al enviar el código de verificación.");
      }
    } else if (step === 2) {
      // Paso 2: Verificar el código y avanzar al siguiente paso
      try {
        const response = await AxiosInstance.post("/api/verify-code", { username, verificationCode }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          message.success("Código de verificación correcto. Ingresa tu nueva contraseña.");
          setStep(3); // Avanzar al siguiente paso
        } else {
          message.error("Código de verificación incorrecto. Verifica el código e inténtalo de nuevo.");
        }
      } catch (error) {
        console.error("Error:", error);
        message.error("Error al verificar el código de verificación.");
      }
    } else if (step === 3) {
      // Paso 3: Restablecer la contraseña

      if (ConfirmNewPassword == newPassword){
        const hashedPassword = SHA256(newPassword).toString();

        try {
          const response = await AxiosInstance.post("/api/reset-password", { username, verificationCode, hashedPassword }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (response.status === 200) {
            message.success("Contraseña restablecida con éxito. Puedes iniciar sesión con tu nueva contraseña.");
            history.push("/login");
          } else {
            message.error("No se pudo restablecer la contraseña. Verifica los datos ingresados.");
          }
        } catch (error) {
          console.error("Error:", error);
          message.error("Error al restablecer la contraseña.");
        }
      }else{
        message.error("La contraseña no coincide")
      }

    }
  };

  return (
    <Row className="hp-authentication-page hp-d-flex" style={{ flexDirection: "column" }}>
      <Background />

      <Col span={24}>
        <Header />
      </Col>

      <Col flex="1 0 0" className="hp-px-32">
        <Row className="hp-h-100 hp-m-auto" align="middle" style={{ maxWidth: 400 }}>
          <Col span={24}>
            <h3>{step === 1 ? "Restablecer contraseña" : step === 2 ? "Código de Verificación" : "Nueva Contraseña"}</h3>

            <Form layout="vertical" name="basic" className="hp-mt-sm-16 hp-mt-32">
              {step === 1 && (
                <Form.Item label="Usuario">
                  <Input
                    id="validating"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value.toUpperCase())}
                  />
                </Form.Item>
              )}
              {step === 2 && (
                <Form.Item label="Código de Verificación">
                  <Input
                    id="verification-code"
                    placeholder="Código de verificación"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </Form.Item>
              )}
              {step === 3 && (
                <>
                  <Form.Item label="Nueva Contraseña">
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="Nueva contraseña"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item label="Confirmar Contraseña">
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirmar contraseña"
                      value={ConfirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                  </Form.Item>
                </>
              )}

              <Form.Item className="hp-mt-16 hp-mb-8">
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  onClick={handleResetPassword}
                >
                  {step === 1 ? "Enviar Código de Verificación" : step === 2 ? "Verificar Código" : "Restablecer Contraseña"}
                </Button>
              </Form.Item>
            </Form>

            {step === 3 && (
              <div className="hp-form-info hp-text-center">
                <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-mr-4">
                  Volver a
                </span>

                <Link
                  to="/login"
                  className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption"
                >
                  Login
                </Link>
              </div>
            )}
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}
