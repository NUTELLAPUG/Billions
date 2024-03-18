import React, { useEffect, useState } from "react";

import Cookies from "js-cookie";
import { Table, Button, message, Form, Input, Card, Progress } from "antd";
import { verifyToken } from "../../../../auth"; // Importa la función de verificación
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../../redux/users/userActions"; // Asegúrate de tener la importación correcta


import { Row, Col, Avatar } from "antd";
import avatarImage from "../../../../assets/images/dasboard/nft-avatar.png";

import { BoxTick, ChartCircle, EmptyWalletTick, ExportSquare, ImportSquare, MedalStar, MoneyRecive, MoneySend, People, Wallet2, WalletMinus } from "iconsax-react";
import { RiVisaLine } from "react-icons/ri";

import "../../../apps/buy-plans/style.css"

import HistoryUser1 from "../../../../assets/images/memoji/user-avatar-5.png";
import HistoryUser2 from "../../../../assets/images/memoji/user-avatar-6.png";
import HistoryUser3 from "../../../../assets/images/memoji/user-avatar-7.png";
import ZendeskLogo from "../../../../assets/images/dasboard/zendesk-logo.svg";
import SalesForceLogo from "../../../../assets/images/dasboard/sales-force-logo.svg";
import AppleLogo from "../../../../assets/images/dasboard/apple-logo.svg";
import GoogleLogo from "../../../../assets/images/dasboard/google-logo.svg";
import VirginLogo from "../../../../assets/images/dasboard/virgin-logo.svg";

import FeatureCard from "./featureCard";
import BalanceCard from "./balanceCard";
import ListCard from "./listCard";
import HistoryCard from "./historyCard";
import CreditCard from "./creditCard";

import logoBlue from "../../../../assets/images/logo/logo.png";
import AxiosInstance from "../../../../axiosInstance";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

  
const columns = [
  {
    title: "IZQUIERDA",
    dataIndex: "left",
    key: "left",
    align: "center", // Centra el contenido horizontalmente
  },
  {
    title: "ESTADÍSTICAS DE LA RED",
    dataIndex: "center",
    key: "center",
    align: "center", // Centra el contenido horizontalmente
  },
  {
    title: "DERECHA",
    dataIndex: "right",
    key: "right",
    align: "center", // Centra el contenido horizontalmente

  },
];


export default function Analytics() {
  // Redux
  const history = useHistory();
  const userData = useSelector((state) => state.userData.userData);
  const customise = useSelector(state => state.customise)
  const [referralLink, setReferralLink] = useState(`www.billionsoffice.com/register/${userData ? userData.username : ""}`);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const dispatch = useDispatch();
  const [treeData, setTreeData] = useState(null);
  const [binaryData, setBinaryData] = useState(null);
  const [newPosition, setNewPosition] = useState(userData? userData.lado : 0); // Nueva posición (0 para izquierda, 1 para derecha)
  const [binarioIzquierdo, setBinarioIzquierdo] = useState(0);
  const [binarioDerecho, setBinarioDerecho] = useState(0);
  const [binario, setBinario] = useState(false); 

  const [data, setData] = useState({});


  useEffect(() => {
    if (!userData || !userData.id) {
      history.push("/login");
    }
  }, [userData, history]);


  useEffect(() => {
    AxiosInstance.get(`/api/datos/${userData ? userData.id : ""}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);
    

  useEffect(() => {
    AxiosInstance.get(`/referidos/${userData ? userData.id : ""}`)
      .then((response) => {
        const userDatas = response.data;
 setBinario(userDatas.referidosIzquierdos.binaryStatus);
                // Actualiza los datos en binaryData
                const updatedBinaryData = [
                  {
                    key: "1",
                    left: userDatas.referidosIzquierdos.totalUsuariosIzquierdos,
                    center: "GENTE",
                    right: userDatas.referidosIzquierdos.totalUsuariosDerechos,
                  },
                  {
                    key: "2",
                    left: userDatas.referidosIzquierdos.binarioIzquierdo,
                    center: "VOLUMEN DE RANGO",
                    right: userDatas.referidosIzquierdos.binarioDerecho,
                  },
                  {
                    key: "3",
                    left: userDatas.referidosIzquierdos.totalBinarioIzquierdo,
                    center: "VOLUMEN TOTAL",
                    right: userDatas.referidosIzquierdos.totalBinarioDerecho,
                  },
                  // Agrega más datos según tu estructura binaria
                ];
        
          
                setBinaryData(updatedBinaryData);

      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);







  const copyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText = referralLink;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setIsLinkCopied(true);
    message.success("Enlace de invitacion copiado");
  };

  const handlePositionChange = async (newPos) => {
    try {
      const response = await AxiosInstance.post("/pos_change", {
        userId: userData ? userData.id : "",
        newPosition: newPos,
      });

      if (response.status === 200) {
        message.success("Posición actualizada con éxito");
        setNewPosition(newPos)
        // Realizar cualquier otra acción que desees después de la actualización
      } else {
        message.error("Error al actualizar la posición");
        // Manejar errores de manera apropiada
      }
    } catch (error) {
      message.error("Error en la solicitud: " + error.message);
      // Manejar errores de red u otros errores
    }
  };

  return (
    <Row gutter={[32, 32]} className="hp-mb-32">
      <Col flex="1" className="hp-overflow-hidden">
        <Row gutter={[32, 32]}>
        <Col md={24} span={24}>
        <Row align="middle" wrap={false}>
          <Col>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 10, transition: { yoyo: Infinity, duration: 2 } }}
          >
            <Avatar size={85} src={avatarImage} style={{ background: "none" }} />
          </motion.div>
          </Col>

          <Col className="hp-ml-14">
            <h2 className="hp-mb-4">Hola, {userData ? userData.username : ""} 👋</h2>

            <p className="hp-p1-body hp-mb-0">
            ¡Bienvenidos a Billions! Juntos, exploraremos un mundo de aprendizaje y crecimiento ilimitados. ¡Estamos emocionados de tenerlos a bordo!
            </p>
          </Col>
        </Row>
      </Col>

        <Col span={24}>
  <Row gutter={[32, 32]}>
    <Col sm={12} span={24}>
      <FeatureCard
       icon={
        <MedalStar
          size="45"
          color="#4A2AA9"
          variant="Bulk"
          />
        }
        title='ROI'
        titleIcon={
          <ExportSquare
            size="14"
            variant="Bold"
            className="hp-text-color-success-1"
          />
        }
        date='Puntos'
        price={data.totalROI !== null ? parseFloat(data.totalROI).toFixed(2) : '0.00'}
      />
    </Col>

    <Col sm={12} span={24}>
      <FeatureCard
       icon={
        <People
        size="45"
        color="#4A2AA9"
        variant="TwoTone"
        />
        }
        title='DIRECTO'
        titleIcon={
          <ImportSquare
            size="14"
            variant="Bold"
            className="hp-text-color-danger-1"
          />
        }
        date='Puntos'
        price={data.totalDirecto !== null ? parseFloat(data.totalDirecto).toFixed(2) : '0.00'}
      />
    </Col>

    <Col sm={12} span={24}>
      <FeatureCard
       icon={
        <People
        size="45"
        color="#4A2AA9"
        variant="Bold"
        />
        }
        title='BINARIO'
        date='Puntos'
        price={data.totalBinario !== null ? parseFloat(data.totalBinario).toFixed(2) : '0.00'}
      />
    </Col>

    <Col sm={12} span={24}>
      <FeatureCard
       icon={
        <BoxTick
          size="45"
          color="#4A2AA9"
          variant="Bold"
          />
        }
        title='MEMBRESIAS ACTIVAS'
        date='Puntos'
        price={data.totalMembresias !== null ? parseFloat(data.totalMembresias).toFixed(2) : '0.00'}
      />
    </Col>

    <Col sm={12} span={24}>
      <FeatureCard
       icon={
        <Wallet2
          size="50"
          color="#4A2AA9"
          variant="Bulk"
          />
        }
        title='TOTAL GANANCIAS'
        date='Puntos'
        price={data.totalGanancias !== null ? parseFloat(data.totalGanancias).toFixed(2) : '0.00'}
      />
    </Col>

    <Col sm={12} span={24}>
      <FeatureCard
       icon={
        <EmptyWalletTick
          size="45"
          color="#4A2AA9"
          variant="Bulk"
          />
        }
        title='GANANCIAS DE POR VIDA'
        date='Puntos'
        price={data.totalGanancias !== null ? parseFloat(data.totalGanancias).toFixed(2) : '0.00'}
      />
    </Col>
  </Row>
</Col>

            
          <Col span={24}>
          
            <div style={{alignItems: "center" }}>
            <Form.Item
                name="referral-link"
                initialValue="www.billions.io/invite/hugman2023"
              >
                <div style={{display: "flex", alignItems: "center" }}>
                  <Input placeholder={`www.billionsoffice.com/register/${userData ? userData.username : ""}`} readOnly />
                  <Button type="primary" style={{marginLeft: '8px',}} onClick={copyToClipboard}>
                    Copiar
                  </Button>

                  <Button
                    type={newPosition === 1 ? "primary" : "outline"} // Cambia el tipo de botón en función de userData.lado
                    style={{ marginLeft: "8px" }}
                    onClick={() => handlePositionChange(1)} // Cambiar a posición izquierda (0)
                  >
                    Izq
                  </Button>

                  <Button
                    type={newPosition === 2 ? "primary" : "outline"} // Cambia el tipo de botón en función de userData.lado
                    style={{ marginLeft: "8px" }}
                    onClick={() => handlePositionChange(2)} // Cambiar a posición derecha (1)
                  >
                    Der
                  </Button>
                </div>
              </Form.Item>
            </div>

            
    <div>
      <Card style={{ marginBottom: 20 }}>
        <h4>PROGRESO DEL PLAN</h4>
        <Row gutter={16} justify="space-between">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            
            <div style={{ textAlign: 'center' }}>
          
              <h2>0.00%</h2>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Progress
              percent="0"
              status="active"
              showInfo={false}
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            
            <div style={{ textAlign: 'left' }}>
              <h5>BENEFICIO ACTUAL</h5>
              <h3>W$ 0.00</h3>
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div style={{ textAlign: 'right' }}>
          <h5>LÍMITE</h5>
           <h3>W$ 0.00</h3>
          </div>
          </Col>

      
        </Row>
      </Card>
    </div>

            <Table
              columns={columns}
              dataSource={binaryData}
              pagination={false}
            
            />

          </Col>

        </Row>
      </Col>

      {
        customise.contentWidth === "boxed" && (
          <Col className="hp-dashboard-line hp-px-0">
            <div className="hp-bg-black-40 hp-bg-dark-80 hp-h-100 hp-mx-24" style={{ width: 1 }}></div>
          </Col>
        )
      }

      <Col className={`hp-analytics-col-2${customise.contentWidth && ' hp-boxed-active'}`}>
        <Row gutter={[32, 40]}>
          <Col span={24}>
          <div className="hp-overflow-hidden hp-position-relative hp-border-radius-xxl hp-bg-primary-1 hp-pt-24 hp-px-24 hp-pb-18" style={{ minHeight: 200 }}>
      <div className="hp-position-absolute-bottom-left hp-w-100" style={{ height: '90%' }}>
        <svg
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M370.717 85.179 180.539 10.257l46.817 86.462L99.151 44.63l129.884 138.803L55.517 116.68l60.47 87.899-127.415-32.922"
            stroke="url(#a)"
            strokeWidth={20}
            strokeLinejoin="bevel"
          />
          <defs>
            <linearGradient
              id="a"
              x1={151.96}
              y1={17.382}
              x2={195.449}
              y2={191.807}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset={0.737} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Row>
        <Col span={24}>
          <img src={logoBlue} width={120} alt="Billions" />
        </Col>

        <Col span={24} className="hp-mt-32">
              {data.totalVouchers >= 1 ? (
                <span className="h3 h-d-block hp-text-color-black-0">PACK CORP {data.totalMembresias}</span>
              ) : (
                // Si data.totalVouchers es menor que 1, no mostrar nada
                null
              )}
            </Col>
        <Col span={24} >
          <span className="h6 h-d-block hp-text-color-black-0">BINARIO {binario ? 'ACTIVO' : 'INACTIVO'}</span>
        </Col>
       
        <Col span={24} className="hp-mt-16" style={{ marginBottom: -16 }}>
          <Row align="middle" justify="space-between">
            <Col>
              <span className="h3 h-d-block hp-text-color-black-0"> {userData ? userData.username : ""} </span>
            </Col>
       

            <Col className="hp-d-flex">
              
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
          </Col>

          <Col span={24}>
          <Card>
            <ListCard
              title='SEGUIMIENTO DE LA CUENTA'
              date=''
              list={[
                {
                 
                  title: 'IBP (ANUAL)',
                  date: '',
                  price: 'INACTIVO'
                },
                {
                
                  title: 'BINARIO',
                  date: '',
                  price: binario ? 'ACTIVO' : 'INACTIVO'
                },
              ]}
            />
            </Card>
          </Col>

      
        </Row>
      </Col>
    </Row>
  );
}
