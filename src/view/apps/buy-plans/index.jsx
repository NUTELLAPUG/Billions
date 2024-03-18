import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Card, Button, Modal, Input, Checkbox, message, Form } from "antd";
import axiosInstance from "../../../axiosInstance";
import Cookies from "js-cookie";
import { CopyOutlined } from "@ant-design/icons"; // Importa el icono de copiar
import qrcode from "../../../assets/images/crypto/qr.png"
import AxiosInstance from "../../../axiosInstance";
import "./style.css";
import UsdtIcon from "../../../assets/images/crypto/trust-wallet.png"

const { Sider, Content } = Layout;

export default function Calendar() {
  const [comprobanteUploaded, setComprobanteUploaded] = useState(false);
  const [planes, setPlanes] = useState([]);
  const [plandata, setPlanData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [consentChecked, setConsentChecked] = useState(false);
  const [countdown, setCountdown] = useState(300); // 300 segundos (5 minutos)
  const [walletAddress, setWalletAddress] = useState(""); // Dirección de la wallet
  const [hasBills, setHasBills] = useState(false);

  const fetchPlanes = async () => {
    const token = Cookies.get("token");
    const headers = {
      Authorization: token,
    };
    try {
      const [planesResponse, billsResponse] = await Promise.all([
        axiosInstance.post("/api/plans", {}, { headers }),
        axiosInstance.get("/api/bills", { headers }), // Agrega una nueva ruta para obtener información de la tabla bills
      ]);
  
      const planesData = planesResponse.data;
      const billsData = billsResponse.data;
  
      // Verifica si hay registros en la tabla bills
      const hasBills = billsData.length > 0;

      setPlanData(billsData);
      setPlanes(planesData);
      setHasBills(hasBills); // Agrega esto al estado para determinar si hay registros en bills
    } catch (error) {
      console.log("Error al obtener registros", error);
    }
  };
  


  const handleModalSubmit = async () => {
    try {
      const token = Cookies.get("token"); // Obtiene el token de las cookies
      const response = await axiosInstance.post("/api/purchasePlan", {
        selectedPlan
      }, {
        headers: {
          Authorization: token // Agrega el token al encabezado
        }
      });
  
      if (response.status === 200 && response.data.success) {
        // Realiza las acciones necesarias en caso de éxito
        message.success("Compra exitosa");
        setModalVisible(false);
        history.go('/buy-plans');
        // Puedes redirigir al usuario a una página de éxito o hacer lo que necesites aquí.
      } else {
        // Maneja el caso en el que la compra falla
        message.error("Error en la compra");
      }
    } catch (error) {
      // Maneja errores generales aquí
      console.error("Error en la solicitud:", error);
      message.error("Error en la solicitud");
    }
  };


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file); // 'image' debe coincidir con el nombre del campo de entrada en el servidor
    formData.append('billId', plandata[0].bill_id); // Agrega el ID de factura a la FormData

    AxiosInstance.post('/api/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Importante establecer el encabezado correcto para archivos
      },
    })
      .then((response) => {
        // Maneja la respuesta del servidor aquí
        message.info(response.data);
        setComprobanteUploaded(true);
      })
      .catch((error) => {
        // Maneja los errores aquí
        console.error(error);
      });
  };
  
  

  const handleModalCancel = () => {
    setModalVisible(false)
    message.error("Compra cancelada")
  };

  useEffect(() => {
    fetchPlanes();
  }, []);

  const handleCopyAddress = () => {
    // Lógica para copiar la dirección USDT
    const payAddressElement = document.createElement("textarea");
    payAddressElement.value = plandata[0].pay_address;
    document.body.appendChild(payAddressElement);
    payAddressElement.select();
    document.execCommand("copy");
    document.body.removeChild(payAddressElement);

    // Puedes mostrar una notificación o mensaje de éxito aquí
    message.success("Dirección USDT copiada al portapapeles");
  };

  const handleCopyAmount = () => {
    // Lógica para copiar la cantidad
    const amountElement = document.createElement("textarea");
    amountElement.value = plandata[0].price; // Asegúrate de convertirlo a cadena si es un número
    document.body.appendChild(amountElement);
    amountElement.select();
    document.execCommand("copy");
    document.body.removeChild(amountElement);

    // Puedes mostrar una notificación o mensaje de éxito aquí
    message.success("Cantidad copiada al portapapeles");
  };
  

  const handleCancelPurchase = async () => {
    try {
      const token = Cookies.get("token"); // Obtiene el token de las cookies

      // Llama a la ruta del servidor para cancelar la compra
      const response = await axiosInstance.post(
        "/api/cancelPurchase",
        { billId: plandata[0].bill_id }, // Envía el ID de factura que deseas cancelar
        {
          headers: {
            Authorization: token // Agrega el token al encabezado
          }
        }
      );

      if (response.status === 200) {
        // Realiza las acciones necesarias en caso de éxito
        message.success("Compra cancelada exitosamente");
        history.go('/my-memberships')
      } else {
        // Maneja el caso en el que la cancelación de la compra falla
        message.error("Error al cancelar la compra");
      }
    } catch (error) {
      // Maneja errores generales aquí
      console.error("Error en la solicitud:", error);
      message.error("Error en la solicitud");
    }
  };
  return (
    <Layout className="hp-calendar hp-mb-32 hp-bg-dark-90">
      <Content>

      {hasBills ? (
      // Muestra contenido si hay registros en bills
      
    <Card style={{ padding: '20px' }} className="hp-border-color-black-40 hp-card-2">
      <div className="container">
      <div className="row">
        <div className="nftmax-table">
          <div className="nftmax-table__heading"></div>

          <div className="tab-content" id="myTabContent">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <h6 className="h5 mb-1 flex text-center" style={{ fontWeight: "bold", textAlign: "center" }}>
                ¡Tu solicitud ha sido recibida con éxito!
                </h6>
                <p className="h5 mb-1 flex text-center" style={{ textAlign: "center" }}>
                Orden #{plandata[0].bill_id}
                </p>

                <h4 style={{ lineHeight: "1.4", textAlign: "center" }}>
                Abre tu billetera de criptomonedas y escanea el código QR. También puedes copiar la dirección USDT a continuación para realizar el pago.
                </h4>
                <div className="d-flex align-items-center text-center" style={{ margin: "0 auto" }}>
                  <div style={{ margin: "0 auto", textAlign: "center" }}>
                    <img src={qrcode} style={{ width: "60%", padding: "10px", borderRadius: "10px", outlineStyle: "dotted" }} alt="QR Code" />
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <div className="pb-2">
                  <h3 className="h2 text-center" style={{ fontWeight: "bold", textAlign: "center" }}>
                    USD {plandata[0].price + plandata[0].comision}
                  </h3>
                </div>
               
                <Row gutter={[16, 16]}>
                  <Col xs={18}>
                    <h5 className="mb-1" style={{ marginBottom: "0", fontSize: "13px", lineHeight: ".5", }}>
                    A esta dirección única:
                    </h5>
                    <h5 className="mb-1" style={{  fontWeight: "bold" }}>
                      {plandata[0].pay_address}
                    </h5>
                    <input type="hidden" name="wallet" id="walletdata" value={plandata[0].pay_address} />
                  </Col>
                  <Col xs={6}>
                    <Button type="link" onClick={handleCopyAddress}>
                      <CopyOutlined />
                    </Button>
                  </Col>
                </Row>

                <Row gutter={[16, 16]} className="mt-3 mb-4">
                  <Col xs={18}>
                    <h5 className="mb-1" style={{ marginBottom: "0", fontSize: "13px", lineHeight: ".5",  }}>
                      Monto total:
                    </h5>
                    <h5 className="mb-1" style={{ fontWeight: "bold" }}>
                      {plandata[0].price + plandata[0].comision} USDT.TRC20
                    </h5>
                    <input type="hidden" name="totalbuy" id="buyamount" value={plandata[0].price} />
                  </Col>

                  <Col xs={6}>
                    <Button type="link" onClick={handleCopyAmount}>
                      <CopyOutlined />
                    </Button>
                  </Col>

                  <Col xs={18}>
                  
                  <Form.Item label="">
                    {plandata[0].comprobante ? (
                      <p>Ya has subido un comprobante. Tu paquete será activado al verificar el pago.</p>
                    ) : (
                      <input type="file" name="image" onChange={handleImageUpload} />
                    )}
                  </Form.Item>

                   
                  </Col>
                  {plandata[0].comprobante ? (
                      <p></p>
                    ) : (
                      <Col xs={18}>
                        <Form.Item label="">
                          <Button onClick={handleCancelPurchase}>Cancelar</Button>
                        </Form.Item>
                      </Col>
                    )}
                 

                  <p style={{ color: "red" }} className="mt-3">
                  El paquete se activará automáticamente cuando se verifique el pago.
                  </p>
               
                </Row>
              </Col>
            </Row>

      

          
          </div>
        </div>
      </div>
    </div>
      </Card>
    
    ) : (

      <Row gutter={[16, 16]}>
      {planes.map((plan, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={8}>
          <Card title={plan.description} hoverable className="custom-card">
            {/* Agrega la imagen de membresía */}
            <div className="card-image">
            <img
            src={`https://${window.location.hostname}:3002${plan.pack_imagen}`}

              alt={plan.description}
              style={{ width: "100%", height: "auto", marginBottom: "10px" }}
            />
            </div>
            <div className="card-content">
            <h5>{plan.descripcion}</h5>
            <h5>Precio: {plan.price} USDT</h5>
            <h5>Comision: {plan.comision} USDT</h5>
            <h5>ROI: {plan.roi}% mensual</h5>
            <h5>Total: {plan.price + plan.comision} USDT</h5>
            </div>

            <div style={{ marginBottom: "10px" }} className="card-button">
              <Button
                    type="primary"
                    onClick={() => {
                      setSelectedPlan(plan);
                      setModalVisible(true);
                      setCurrentStep(0);
                      setFormData({
                        username: "",
                        email: "",
                      });
                      setConsentChecked(true);
                      setWalletAddress(""); // Reinicia la dirección de la wallet
                      setCountdown(300); // Reinicia la cuenta regresiva
                    }}
                  >
                    Comprar
                  </Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
        )}
      </Content>
      <Modal
        title="Comprar Plan"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={
          <div>
    
              <>
                <Checkbox
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                >
                  Acepto
                </Checkbox>
                <Button
                  type="primary"
                  onClick={handleModalSubmit}
                  disabled={!consentChecked}
                >
                  Continuar
                </Button>
              </>
          
          </div>
        }
      >
          <div>
            <h4>{selectedPlan?.description}</h4>
            <h4>Precio: {selectedPlan?.price} USDT</h4>
            <h4>Plan de {selectedPlan?.months} meses</h4>
          </div>
      </Modal>
    </Layout>
  );
}
