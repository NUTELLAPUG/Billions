import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios"; // Importa Axios
import { SHA256 } from 'crypto-js';

import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../../redux/users/userActions"; // Asegúrate de tener la importación correcta
import Background from "../background";
import { Row, Col, Form, Input, Button, Checkbox, message } from "antd";
import LeftContent from "../leftContent";
import Footer from "../footer";
import axiosInstance from "../../../../axiosInstance";
import { motion } from 'framer-motion';

// Importa tu logo
import logo from "../../../../../src/assets/images/logo/logo.png";
import back from "../../../../assets/images/dasboard/back.jpg"
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Login = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      history.push("/");
    }
  }, []);

  const handleLogin = async () => {
    try {
      // Genera un hash (resumen) de la contraseña antes de enviarla al servidor
      const hashedPassword = SHA256(password).toString();
      const response = await axiosInstance.post("/login", { username, password: hashedPassword });

      const token = response.data.token;
      Cookies.set('token', token);

      try {
        const response = await axiosInstance.get("/user", {
          headers: {
            Authorization: token,
          },
        });

        // Almacena los datos del usuario en el estado global de Redux
        dispatch(setUserData(response.data));

        if (response.data.role === 1) {
          // Puedes agregar redirecciones específicas para diferentes roles aquí
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario", error);
      }

      history.push('/');
    
    } catch (error) {
      message.error('Incorrect username or password');
      console.error('Error:', error);
    }
  };

 return (
    <Row>
      <Col
      style={{width: '100vh', padding: 30, backgroundColor: "#F9F9F9"}}
      sm={8}
   
      >
        <motion.div
        style={{paddingBottom: 50}}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div style={{ textAlign: "center" }} className="logo">
            <img width={250} src={logo} alt="Logo" />
          </div>
        </motion.div>
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="hp-mb-sm-0"
      
        >
          Inicia sesión
        </motion.h3>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="hp-mt-sm-0 hp-mt-8 hp-text-color-black-60"
        >
          Bienvenido, inicia sesión en tu cuenta.
        </motion.p>

        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          className="hp-mt-sm-16 hp-mt-32"
        >
          <Form.Item label="Usuario :" className="hp-mb-16">
            <Input value={username} onChange={(e) => setUsername(e.target.value.toUpperCase())} />
          </Form.Item>

          <Form.Item label="Contraseña :" className="hp-mb-8">
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>

          <Row align="middle" justify="space-between">
            <Form.Item className="hp-mb-0">
              <Checkbox name="remember">Recordarme</Checkbox>
            </Form.Item>

            <Link
              className="hp-button hp-text-color-black-80 hp-text-color-dark-40"
              to="/recover-password"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </Row>

          <Form.Item className="hp-mt-16 hp-mb-8">
            <Button block type="primary" htmlType="button" onClick={handleLogin}>
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>

        <Col className="hp-form-info hp-text-center">
          <span className="hp-text-color-black-80 hp-text-color-dark-40 hp-caption hp-font-weight-400 hp-mr-4">
            ¿No tienes una cuenta?
          </span>

          <Link
            className="hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-caption"
            to="/register"
          >
            Crear una cuenta
          </Link>
        </Col>

        <Footer />
      </Col>
      <Col
        style={{
          height: "100vh",
          backgroundImage: `url(${back})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
        xxl={16}
        xl={16}
        lg={16} 
        md={16}
        sm={16}
      >
        {/* Contenido adicional que desees colocar */}
      </Col>
</Row>
);
};

export default Login;
