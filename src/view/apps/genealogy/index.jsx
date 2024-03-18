import React, { useState, useEffect } from "react";
import Tree from 'react-d3-tree';
import AxiosInstance from "../../../../src/axiosInstance"; // Importa tu instancia de Axios

import { Layout, Row, Col, Card, Button, Drawer, Table, message, Tooltip } from "antd";
import './style.css';

// Redux
import { useSelector, useDispatch } from "react-redux";

const { Sider, Content } = Layout;

export default function Calender() {
  // Redux
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData.userData);
  const [treeData, setTreeData] = useState(null);
  const [binaryData, setBinaryData] = useState(null);

  useEffect(() => {
    AxiosInstance.get(`/arbol/${userData.id}`)
      .then((response) => {
        const treeData = {
          name: userData.username.toString(),
          children: [],
        };

        let totalCostoPaquetesIzquierdo = 0;
        let totalCostoPaquetesDerecho = 0;
        let totalUsuariosConPaquetesIzquierdo = 0;
        let totalUsuariosConPaquetesDerecho = 0;

        if (response.data && response.data.usuarios) {
          totalCostoPaquetesIzquierdo = response.data.totalCostoPaquetesIzquierdo;
          totalCostoPaquetesDerecho = response.data.totalCostoPaquetesDerecho;
          totalUsuariosConPaquetesIzquierdo = response.data.totalUsuariosConPaquetesIzquierdo;
          totalUsuariosConPaquetesDerecho = response.data.totalUsuariosConPaquetesDerecho;

          function construirArbol(usuario, nivel, esLadoIzquierdoReferente) {
            const usuarioNode = {
              name: `${usuario.name} ${usuario.packDescription ? ` (B${usuario.packDescription.match(/\d+/)})` : ''}`,
              emoji: '🌳',
              position: usuario.position,
              user_id: usuario.id,
              paquetesAdquiridos: usuario.paquetesAdquiridos,
              children: [],
            };

            if (nivel > 0) {
              if (usuario.referidos) {
                const referidosLadoIzquierdo = usuario.referidos.filter(referido => referido.position === 1);
                const referidosLadoDerecho = usuario.referidos.filter(referido => referido.position === 2);

                const esLadoIzquierdoReferido = usuario.position === 1;

                const leftChildren = referidosLadoIzquierdo.map(referido => construirArbol(referido, nivel, esLadoIzquierdoReferido));
                const rightChildren = referidosLadoDerecho.map(referido => construirArbol(referido, nivel, esLadoIzquierdoReferido));

                usuarioNode.children.push(...leftChildren, ...rightChildren);
              }
            }

            return usuarioNode;
          }

          const nivelProfundidadDeseado = 100;
          response.data.usuarios.forEach((usuario) => {
            const usuarioNode = construirArbol(usuario, nivelProfundidadDeseado, false);
            if (usuarioNode) {
              treeData.children.unshift(usuarioNode);
            }
          });
        }

        // Reverse the children array
     
        setTreeData(treeData);

        const updatedBinaryData = [
          {
            key: "2",
            left: totalCostoPaquetesIzquierdo,
            center: "VOLUMEN DE RANGO",
            right: totalCostoPaquetesDerecho,
          },
          // Agrega más datos según tu estructura binaria
        ];

        console.log(updatedBinaryData);
      })
      .catch((error) => {
        console.error('Error al obtener el árbol binario:', error);
      });
  }, [userData]);
  

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

  
  return (
    <Layout className="hp-calendar hp-mb-32 hp-bg-dark-90">
      <Content>
        <Card>
          <Row>
            <Col flex="1 1" className="hp-py-24">
            
              <div style={{ width: '100%', height: '500px' }}>
                {treeData ? (
                  <Tree
                    data={treeData}
                 
                    orientation="vertical"
                    translate={{ x: 300, y: 200 }}
                    collapsible={true}
                    zoom={0.7}
                    separation={{ siblings: 3, nonSiblings: 4 }}
                    onNodeClick={(nodeData) => {
                   
                  }}
               
                  rootNodeClassName="node__root"
                    branchNodeClassName="node__branch"
                    leafNodeClassName="node__leaf"
                  />
                  
                ) : (
                  <p>Cargando datos del árbol...</p>
                )}
              </div>
            </Col>
          </Row>
        </Card>
      </Content>
    </Layout>
  );
}

