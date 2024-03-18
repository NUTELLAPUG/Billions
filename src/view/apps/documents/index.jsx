import React from "react";
import { Layout, Row, Col, Card, Button } from "antd";
import Cookies from "js-cookie";
import { DocumentDownload } from "iconsax-react";

const { Content } = Layout;

export default function Calender() {
  const token = Cookies.get("token");
  const googleDriveLink = "https://drive.google.com/file/d/1CSMsFUsINR8KrexM8xzZ6qVH2Z6uzovK/view";

   // Estilo para el fondo
   const backgroundStyle = {
    backgroundImage: `url('https://i.ibb.co/Kxkb8YD/Imagen-de-Whats-App-2023-09-30-a-las-00-37-19-00ae273e.jpg')`, // Ruta de la imagen de fondo
    backgroundSize: 'cover', // Escala la imagen para cubrir todo el contenedor
    backgroundRepeat: 'no-repeat', // Evita que la imagen de fondo se repita
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <Layout className="hp-calendar hp-bg-dark-90">
      <Content>
        <Card>
          <Row>
            <Col flex="1 1" className="hp-py-24">
              <h5>Documentos</h5>
              <Row style={{ minHeight: "50vh" }}>
                <Col xs={24} lg={8}>
                  <Card
                    style={backgroundStyle}
                    onClick={() => window.open(googleDriveLink, "_blank")}
                    hoverable
                  >
                   
                  </Card>
                  <Card>
                  <a
                    href={googleDriveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textAlign: "center", marginTop: "10px", display: "block" }}
                  >
                    <Button type="outline" icon={<DocumentDownload size={20} />}>
                      Descargar PDF Español
                    </Button>
                  </a>
                </Card>
                 
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Content>    
    </Layout>
  );
}
