import React, { useEffect, useState } from "react";
import { Row, Col, Card, Dropdown, Menu, message, Button, Modal } from "antd";
import { RiMoreFill, RiArrowRightUpLine } from "react-icons/ri";
import Chart from "react-apexcharts";
import { DataGrid } from "@mui/x-data-grid"; // Importa el DataGrid
import AxiosInstance from "../../../../axiosInstance";
import { CardHeader } from "@mui/material";
// ... (Otras importaciones)

export default function AdminComponent() {
  const [comprobanteUrl, setComprobanteUrl] = useState("");
  const [showComprobante, setShowComprobante] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

  const [billData, setBillData] = useState([]);
  const getRowId = (row) => row.bill_id;
  const [totalReales, setTotalReales] = useState(0); // Estado para almacenar el total de registros
  const [totalVoucher, setTotalVoucher] = useState(0); // Estado para almacenar el total de registros

  useEffect(() => {
    // Realiza una solicitud GET al servidor Node.js para obtener la información combinada
    AxiosInstance.get("/api/getBillData") // Ajusta la ruta según tu configuración
      .then((response) => {
        // La respuesta debe contener los datos combinados de bills, users y packs
        const data = response.data;
        setBillData(data);
         const total = data.length;

        const Reales = data.filter((record) => record.voucher === 1);   
        const totalReales = Reales.length;
        setTotalReales(totalReales);
	console.log(totalReales);

         // Almacena el total en el estado totalRecords
    

         const filteredData = data.filter((record) => record.voucher === 2);   
         const totalVoucher = filteredData.length;
         setTotalVoucher(totalVoucher);
	console.log(totalVoucher);

      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const getPaymentMenu = (params) => {
    const menuItems = [];
     if (params.row.status != 3) {
      // Si el pago no está confirmado, muestra la opción para confirmar
      menuItems.push(
        <Menu.Item key="confirm" onClick={() => handleConfirmPayment(params.row.bill_id, 2)}>
          Confirmar como Voucher
        </Menu.Item>
        
      );

      menuItems.push(
        <Menu.Item key="confirm" onClick={() => handleConfirmPayment(params.row.bill_id, 1)}>
          Confirmar como Real
        </Menu.Item>
        
      );
    }
  
    // Siempre muestra la opción para rechazar
    menuItems.push(
      <Menu.Item key="reject" onClick={() => handleRejectPayment(params.row.bill_id)}>
        Rechazar Pago
      </Menu.Item>
    );

    menuItems.push(
      <Menu.Item key="comprobante" onClick={() => handleShowComprobante(params.row)}>
        Comprobante
      </Menu.Item>
    );
  
    return <Menu>{menuItems}</Menu>;
  };
  

  const handleShowComprobante = (row) => {
    // Aquí debes obtener la URL de la imagen del servidor y establecerla en el estado comprobanteUrl
    const imageUrl = `https://billionsoffice.com:3002${row.comprobante}`; // Reemplaza con la lógica real para obtener la URL de la imagen
    setComprobanteUrl(imageUrl);
    setShowComprobante(true);
    setModalVisible(true); // Mostrar el modal cuando se muestre el comprobante
  };
  

  // Define las columnas para el DataGrid
  const columns = [
    { field: "bill_id", headerName: "ID de Factura", width: 150 },
    { field: "description", headerName: "Paquete", width: 150 },
    { field: "username", headerName: "Propietario", width: 150 },
    { field: "status", headerName: "Estado", width: 150,   valueGetter: (params) => {
      switch (params.row.status) {
        case 1:
          return "Pendiente";
        case 2:
          return "Rechazado";
        case 3:
          return "Completado";
        default:
          return "";
      }
    }, },
    { field: "price", headerName: "Monto", width: 200 },
    { field: "date_buyed", headerName: "Fecha", width: 200 },
    {
      headerName: "",
      width: 180,
      renderCell: (params) => (
        <Dropdown overlay={getPaymentMenu(params)} trigger={["click"]}>
          <Button type="default" disabled={params.row.paymentConfirmed}>
            Acción
          </Button>
        </Dropdown>
      ),
    }
    
  ];

  const handleRejectPayment = (billId) => {
    // Lógica para confirmar el pago y actualizar el estado
    // Realiza una solicitud POST al servidor para confirmar el pago
  
    AxiosInstance.post("/api/rejectPackage", { billId })
      .then((response) => {
        // Si la solicitud se completó con éxito, actualiza el estado local
        const updatedData = billData.map((bill) => {
          if (bill.bill_id === billId) {
            return { ...bill};
          }
          return bill;
        });
        setBillData(updatedData);

        if(response.data.status === true){

          message.success(response.data.message)
        }else{
          message.error(response.data.message)
        }
      })
      .catch((error) => {
        console.error("Error al confirmar el pago:", error);
      });
  };

  const handleConfirmPayment = (billId, type) => {
    // Lógica para confirmar el pago y actualizar el estado
    // Realiza una solicitud POST al servidor para confirmar el pago
  
    AxiosInstance.post("/api/activatePackage", { billId, type })
      .then((response) => {
        // Si la solicitud se completó con éxito, actualiza el estado local
        const updatedData = billData.map((bill) => {
          if (bill.bill_id === billId) {
            return { ...bill };
          }
          return bill;
        });
        setBillData(updatedData);

        if(response.data.status === true){

          message.success(response.data.message)
        }else{
          message.error(response.data.message)
        }
      })
      .catch((error) => {
        console.error("Error al confirmar el pago:", error);
      });
  };
  

  const menu = (
    <Menu>
      <Menu.Item>Last 28 Days</Menu.Item>
      <Menu.Item>Last 6 Month</Menu.Item>
      <Menu.Item>Last Year</Menu.Item>
    </Menu>
  );

  const [data1] = useState({
    series: [
      {
        data: [31, 10, 109, 60, 140, 40, 150],
      },
    ],
    options: {
      chart: {
        fontFamily: "Manrope, sans-serif",
        type: "line",
        stacked: true,
        id: "visiters-line-card",

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#0063F7"],
      labels: {
        style: {
          fontSize: "14px",
        },
      },
      stroke: {
        curve: "smooth",
        lineCap: "round",
      },

      tooltip: {
        enabled: false,
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },

      markers: {
        strokeWidth: 0,
        size: 0,
        colors: ["#0063F7", "#1BE7FF"],
        hover: {
          sizeOffset: 1,
        },
      },
      xaxis: {
        // type: "numeric",
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },

        labels: {
          show: false,
        },
      },
      // xaxis: {
      //   axisTicks: {
      //     show: false,
      //   },
      //   labels: {
      //     show: false,
      //   },
      //   axisBorder: {
      //     show: false,
      //   },
      // },
      responsive: [
        {
          breakpoint: 426,
          options: {
            legend: {
              itemMargin: {
                horizontal: 16,
                vertical: 8,
              },
            },
          },
        },
      ],

      yaxis: [
        {
          show: false,

          // y: 0,
          offsetX: 0,
          offsetY: 0,
          padding: {
            left: 0,
            right: 0,
          },
        },
      ],
    },
  });


  const dataForCards = [
    {
      title: "Voucher",
      total: totalVoucher,
      increasePercentage: 0,
    },
    {
      title: "Reales",
      total: totalReales,
      increasePercentage: 10,
    },
    {
      title: "Volumen",
      total: 0,
      increasePercentage: 10,
    },
    // Agrega más datos de tarjetas según tus necesidades
  ];

  return (
    <div>
     <Row gutter={[16, 16]} className="hp-mb-32">
        {dataForCards.map((cardData, index) => (
          <Col xl={8} lg={12} sm={24} xs={24} key={index}>
            <Card className="hp-border-color-black-40 hp-card-2">
              <Row gutter={16} align="middle">
                <Col className="hp-px-0" span={24}>
                  <Row justify="space-between">
                    <h5 className="hp-mr-8">{cardData.title}</h5>

                    <Dropdown overlay={menu} trigger={["click"]}>
                      <RiMoreFill
                        className="hp-text-color-dark-0"
                        size={24}
                        onClick={(e) => e.preventDefault()}
                      />
                    </Dropdown>
                  </Row>
                </Col>

                <Col span={12} className="hp-mb-xs-32 hp-px-0">
                  <p className="hp-badge-text hp-mb-0 hp-text-color-black-80 hp-text-color-dark-30">
                    TOTAL
                  </p>

                  <h2 className="hp-my-4">{cardData.total}</h2>

                  <Row>
                    <RiArrowRightUpLine
                      className="hp-text-color-success-1"
                      size={16}
                    />
                    <p className="hp-mb-0 hp-badge-text hp-text-color-success-1">
                      {cardData.increasePercentage}%
                    </p>
                  </Row>
                </Col>

                <Col span={12} className="hp-mb-xs-32 hp-px-0">
                  <Chart
                    options={data1.options}
                    series={data1.series}
                    type="line"
                    height="70%"
                    legend="legend"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
        
        {showComprobante && (
          <Modal
            title="Comprobante"
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={[
              <Button key="close" onClick={() => setModalVisible(false)}>
                Cerrar
              </Button>,
            ]}
          >
            {showComprobante && <img src={comprobanteUrl} alt="Comprobante" />}
          </Modal>
          )}

        <Card className="hp-border-color-black-40 hp-card-2">
          <h5>PAQUETES (TODOS)</h5>
          <div style={{ height: 400, width: "100%" }}>
          <DataGrid rows={billData} columns={columns} getRowId={getRowId}  />
          </div>
        </Card>
        </Col>
      </Row>
    </div>
  );
}
