import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Form, Input, Button, message } from "antd";
import Background from "../background";
import Header from "../header";
import Footer from "../footer";
import axiosInstance from "../../../../axiosInstance";
import { SHA256 } from "crypto-js";
import { useParams } from "react-router-dom";


export default function SignUp() {
  const history = useHistory();
  const { referrer } = useParams(); // Obtiene el valor de referrer de la URL
  const [step, setStep] = useState(0);
  const [inputActiveReferrer, setInputActiveReferrer] = useState(false); // Estado para almacenar el valor de inputActiveReferrer

  // Este efecto se ejecutará cada vez que referrer cambie
  useEffect(() => {
    // Verificar si referrer no está vacío
    console.log(formData.referrer)
    if (formData.referrer == "") {
      setInputActiveReferrer(false); // Establecer inputActiveReferrer en true si referrer no está vacío
    } else {
      setInputActiveReferrer(true); // Establecer inputActiveReferrer en false si referrer está vacío
    }
  }, [referrer]); // La dependencia referrer hace que el efecto se ejecute cuando referrer cambie

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    referrer: referrer || "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormSubmit = async () => {
    try {
      // Hashea la contraseña antes de enviarla al servidor
      const hashedPassword = SHA256(formData.password).toString();
      const hashedconfirmPassword = SHA256(formData.confirmPassword).toString();

      // Actualiza el objeto formData con la contraseña hasheada
      const updatedFormData = { ...formData, password: hashedPassword, confirmPassword: hashedconfirmPassword };
  
      const response = await axiosInstance.post("/api/signup", updatedFormData);
  
      if (response.status === 200) {
        message.success(response.data.message);
        history.push("/login");
      } else if (response.status === 400) {
        message.error(response.data.message); // Muestra el mensaje de error del backend
      }
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message); // Muestra el mensaje de error de la respuesta
      } else {
        message.error("Error al registrar.");
      }
    }
  };
  
  

  const steps = [
    {
      label: "Username :",
      id: "username",
    },
    {
      label: "E-mail :",
      id: "email",
    },
    {
      label: "Referrer :",
      id: "referrer",
    },
    {
      label: "First Name :",
      id: "firstName",
    },
    {
      label: "Last Name :",
      id: "lastName",
    },
    {
      label: "Password :",
      id: "password",
    },
    {
      label: "Confirm Password :",
      id: "confirmPassword",
    },
  ];

  const currentStep = steps[step];

  return (
    <Row className="hp-authentication-page hp-d-flex" style={{ flexDirection: "column" }}>
      <Background />
      <Col span={24}>
        <Header />
      </Col>
      <Col flex="1 0 0" className="hp-px-32">
        <Row className="hp-h-100 hp-m-auto" align="middle" style={{ maxWidth: 360 }}>
          <Col span={24}>
            <h1>Create Account</h1>
            <Form layout="vertical" name="basic" className="hp-mt-sm-16 hp-mt-32">
              <Form.Item label={currentStep.label}>
                <Input
                  id={currentStep.id}
                  value={formData[currentStep.id]}
                  onChange={(e) => {
                    if (currentStep.id === 'username' || currentStep.id === 'referrer') {
                      setFormData({ ...formData, [currentStep.id]: e.target.value.toUpperCase() });
                    } else {
                      setFormData({ ...formData, [currentStep.id]: e.target.value });
                    }
                  }}
                  
                  disabled={currentStep.id === "referrer" && inputActiveReferrer}
                />
              </Form.Item>
            </Form>
            <Row gutter={16}>
              {step > 0 && (
                <Col span={12}>
                  <Button block type="default" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                </Col>
              )}

              {step < steps.length - 1 && (
                <Col span={step > 0 ? 12 : 24}>
                  <Button block type="primary" onClick={() => setStep(step + 1)}>
                    Continue
                  </Button>
                </Col>
              )}

              {step === steps.length - 1 && (
                <Col span={step > 0 ? 12 : 24}>
                  <Button block type="primary" onClick={handleFormSubmit}>
                    Sign up
                  </Button>
                </Col>
              )}
            </Row>
            <div className="hp-form-info hp-text-center hp-mt-8">
              <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-mr-4">
                Already have an account?
              </span>
              <Link
                to="/login"
                className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption"
              >
                Login
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
