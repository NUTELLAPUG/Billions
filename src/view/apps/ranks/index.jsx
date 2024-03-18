import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Card, Progress } from "antd";
import Cookies from "js-cookie";
import AxiosInstance from "../../../axiosInstance";
import { useSelector } from "react-redux";

const { Content } = Layout;

export default function MLMRangos() {
  const token = Cookies.get("token");
  const [puntosActuales, setPuntosActuales] = useState(0);
  const [rangosData, setRangosData] = useState([]);
  const [showAnimation, setShowAnimation] = useState(true);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [mensajeFelicitaciones, setMensajeFelicitaciones] = useState("");
  const [rangoAlcanzado, setRangoAlcanzado] = useState("");

  const userData = useSelector((state) => state.userData.userData);
  const [treeData, setTreeData] = useState(null);
  const [binaryData, setBinaryData] = useState(null);

  const logoRangos = {
    "B2000": require("../../../assets/images/paquetes/B2000.png"),
    "B5000": require("../../../assets/images/paquetes/B5000.png"),
    "ZAFIRO": require("../../../assets/images/paquetes/ZAFIRO.png"),
    "RUBI": require("../../../assets/images/paquetes/RUBI.png"),
    "ESMERALDA": require("../../../assets/images/paquetes/ESMERALDA.png"),
    "DIAMANTE": require("../../../assets/images/paquetes/DIAMANTE.png"),
    "DOBLE DIAMANTE": require("../../../assets/images/paquetes/DOBLE DIAMANTE.png"),
    "TRIPLE DIAMANTE": require("../../../assets/images/paquetes/TRIPLE DIAMANTE.png"),
    "DIAMANTE CORONA": require("../../../assets/images/paquetes/DIAMANTE CORONA.png"),
    // Agrega más rutas según sea necesario
  };

  useEffect(() => {
    // Realiza una solicitud GET para obtener los datos del árbol binario
    AxiosInstance.get(`/arbol/${userData.user_id}`)
      .then((response) => {
        // La respuesta debe contener los datos en el formato que deseas
        const treeData = {
          name: userData.username.toString(), // El nombre de la raíz es el ID del usuario actual
          children: [],
        };

        let totalPaquetesIzquierdo = 0;
        let totalCostoPaquetesIzquierdo = 0;
        let totalPaquetesDerecho = 0;
        let totalCostoPaquetesDerecho = 0;

        if (response.data && response.data.usuarios) {
          // Función recursiva para construir el árbol con profundidad limitada
          function construirArbol(usuario, nivel) {
            const usuarioNode = {
              name: usuario.name,
              emoji: '🌳',
              user_id: usuario.user_id,
              paquetesAdquiridos: usuario.paquetesAdquiridos,
              children: [],
            };

            if (usuario.position === 1) {
              // Lado izquierdo
              totalPaquetesIzquierdo += usuario.paquetesAdquiridos;
              totalCostoPaquetesIzquierdo += usuario.costoPaquetes;
            } else if (usuario.position === 2) {
              // Lado derecho
              totalPaquetesDerecho += usuario.paquetesAdquiridos;
              totalCostoPaquetesDerecho += usuario.costoPaquetes;
            }

            const minCostoPaquetes = Math.min(totalCostoPaquetesIzquierdo, totalCostoPaquetesDerecho);
            setPuntosActuales(minCostoPaquetes);

            if (nivel > 0) {
              // Si no hemos alcanzado la profundidad deseada
              if (usuario.referidos) {
                // Si hay referidos para este usuario
                const referidosLadoIzquierdo = usuario.referidos.filter(referido => referido.position === 1);
                const referidosLadoDerecho = usuario.referidos.filter(referido => referido.position === 2);

                if (referidosLadoIzquierdo.length === 0) {
                  const nodoVacioIzquierdo = {
                    name: "DISPONIBLE",
                    emoji: '🌳',
                    children: [],
                  };
                  usuarioNode.children.unshift(nodoVacioIzquierdo);
                }

                if (referidosLadoDerecho.length === 0) {
                  const nodoVacioDerecho = {
                    name: "DISPONIBLE",
                    emoji: '🌳',
                    children: [],
                  };
                  usuarioNode.children.push(nodoVacioDerecho);
                }

                // Agregar referidos al lado izquierdo
                referidosLadoIzquierdo.forEach((referido) => {
                  const referidoNode = construirArbol(referido, nivel - 1);
                  if (referidoNode) {
                    usuarioNode.children.unshift(referidoNode);
                  }
                });

                // Agregar referidos al lado derecho
                referidosLadoDerecho.forEach((referido) => {
                  const referidoNode = construirArbol(referido, nivel - 1);
                  if (referidoNode) {
                    usuarioNode.children.push(referidoNode);
                  }
                });
              }
            }

            return usuarioNode;
          }

          // Limitar la profundidad deseada
          const nivelProfundidadDeseado = 100; // Ajusta esto según tus necesidades
          response.data.usuarios.forEach((usuario) => {
            const usuarioNode = construirArbol(usuario, nivelProfundidadDeseado, null);
            if (usuarioNode) {
              treeData.children.unshift(usuarioNode);
            }
          });
        }

        setTreeData(treeData);

        // Actualiza los datos en binaryData
        const updatedBinaryData = [
          {
            key: "1",
            left: totalPaquetesIzquierdo,
            center: "PEOPLE",
            right: totalPaquetesDerecho,
          },
          {
            key: "2",
            left: totalCostoPaquetesIzquierdo,
            center: "RANK VOLUME",
            right: totalCostoPaquetesDerecho,
          },
          // Agrega más datos según tu estructura binaria
        ];

        setBinaryData(updatedBinaryData);
        console.log(updatedBinaryData);
      })
      .catch((error) => {
        console.error('Error al obtener el árbol binario:', error);
      });
  }, [userData]);

  useEffect(() => {
    const fetchRangosData = async () => {
      try {
        const response = await AxiosInstance.get("/api/rangos");
        setRangosData(response.data);

        // Encuentra el rango alcanzado
        const rangoAlcanzado = response.data.find(
          (rango) =>
            puntosActuales >= rango.puntos_inicio && puntosActuales <= rango.puntos_final
        );

        if (rangoAlcanzado) {
          setShowCongratulations(true);

          setMensajeFelicitaciones(`¡FELICITACIONES!`);
          setRangoAlcanzado(`Eres ${rangoAlcanzado.rango_nombre}`);

          // Ocultar el mensaje después de 3 segundos
          setTimeout(() => {
            setShowCongratulations(false);
          }, 3000);
        }
      } catch (error) {
        console.error("Error al obtener datos de rangos:", error);
      }
    };

    fetchRangosData();
  }, [puntosActuales]);

  // Restaurar la animación después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Función para calcular el porcentaje de progreso del rango
  const calcularPorcentajeProgreso = (puntosFinal, puntosInicio, puntosActuales) => {
    return (puntosActuales / puntosInicio) * 100;
  };

  // Estilos personalizados para los rangos
  const rangoCardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    transition: "transform 0.3s",
    opacity: showAnimation ? 0 : 1, // Configura la opacidad inicial
    transform: showAnimation ? "scale(0.5)" : "scale(1)", // Configura la escala inicial
  };

  const rangoImageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "16px",
  };

  const rangoProgressStyle = {
    marginTop: "12px",
  };

  return (
    <Layout className="hp-calendar hp-mb-32 hp-bg-dark-90">
      <Content>
        {showCongratulations && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              color: "white",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h1 style={{color: "white"}}>{mensajeFelicitaciones}</h1>
              <h1 style={{color: "white"}}>{rangoAlcanzado}</h1>
            </div>
          </div>
        )}
        <Row gutter={[16, 16]}>
          {rangosData.map((rango) => (
            <Col xs={24} lg={12} key={rango.rango_nombre}>
              <Card
                hoverable={puntosActuales >= rango.puntos_inicio && puntosActuales <= rango.puntos_final}
                style={{
                  ...rangoCardStyle,
                  border: puntosActuales >= rango.puntos_inicio && puntosActuales <= rango.puntos_final
                    ? "2px solid #1890ff" // Estilo de borde cuando es el rango actual
                    : rangoCardStyle.border,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <img src={logoRangos[rango.rango_nombre]} alt={rango.rango_nombre} style={rangoImageStyle} />
                <h3>{rango.rango_nombre}</h3>
                <p>
                  Puntos Inicio: {rango.puntos_inicio} - Puntos Final: {rango.puntos_final}
                </p>
                <Progress
                  percent={calcularPorcentajeProgreso(
                    rango.puntos_final,
                    rango.puntos_inicio,
                    puntosActuales
                  )}
                  style={rangoProgressStyle}
                />
                <p>
                  Faltan {Math.max(0, rango.puntos_inicio - puntosActuales)} puntos para alcanzar este rango.
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
}
