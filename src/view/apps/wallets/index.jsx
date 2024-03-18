import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Card, Button, Drawer, Table, Modal, Input, Form, message, Popconfirm } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import axiosInstance from "../../../axiosInstance";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import PageContent from "../../../layout/components/content/page-content";

const { Sider, Content } = Layout;

export default function Calender() {
  // Redux
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tableData, setTableData] = useState([]);
  const token = Cookies.get("token");
  
    // Define los campos del formulario en un objeto JSON
    const formFields = [
      {
        label: "Nombre billetera",
        name: "name",
      },
      {
        label: "USDT Dirección",
        name: "wallet",
      },
    // Agrega más campos aquí si es necesario
    ];

  // Función para manejar la eliminación de un registro
  const handleDelete = async (walletId) => {
    const token = Cookies.get("token");
      const headers = {
        'Authorization': token // Adjunta el token en el encabezado de autorización
      };
      try {
        const response = await axiosInstance.post("/api/eliminarBilletera", {walletId}, { headers });
        
        if(response.data.status == false){
          message.error(response.data.message)
        }else{
          setTableData((prevData) => prevData.filter((item) => item.wallet_id !== walletId));
          message.success(response.data.message)
        }

      } catch (error) {
        console.error("Error al obtener los retiros", error);
      }
  };


    const fetchRetiros = async () => {
      const token = Cookies.get("token");
      const headers = {
        'Authorization': token // Adjunta el token en el encabezado de autorización
      };
      try {
        const response = await axiosInstance.post("/api/wallets", {}, { headers });
        setTableData(response.data);
        console.log(tableData);
      } catch (error) {
        console.error("Error al obtener los retiros", error);
      }
    };
    
    useEffect(() => {
      fetchRetiros(); // Cuando el componente se monta, obtiene los datos de las wallets
    }, []);

    
    
  // Columnas de la tabla
  const columnas = [
    {
      title: "ID",
      dataIndex: "wallet_id",
      key: "id"
    },
    {
      title: "WALLET",
      dataIndex: "wallet_name",
      key: "wallet"
    },
    {
      title: "CREATION DATE",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "ACTIONS",
      key: "actions",
      render: (text, record) => (
        <span>
          <Popconfirm
            title="Confirma eliminacion"
            onConfirm={() => handleDelete(record.wallet_id)}
            okText="Yes"
            cancelText="No"
          >
          <Button type="link" icon={<DeleteOutlined />} />
          </Popconfirm>
        </span>
      )
    }
  ];


  // Crea el estado formData dinámicamente a partir de formFields
  const initialFormData = {};
  formFields.forEach((field) => {
    initialFormData[field.name] = "";
  });
  const [formData, setFormData] = useState(initialFormData);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    // Aquí puedes realizar acciones con los datos del formulario
    const headers = {
      'Authorization': token // Adjunta el token en el encabezado de autorización
    };

    try {
      const response = await axiosInstance.post("/api/add_wallet", formData, { headers });

      if(response.data.status == false){
        message.error(response.data.message);
      }else{
        message.success(response.data.message);
        // Agrega la nueva wallet al estado local (tableData)
        setIsModalVisible(false);
        
        const newWallet = {
          wallet_id: response.data.wallet_id, // Asigna el ID si está disponible en la respuesta
          wallet_name: formData.name,
          date: response.data.date || new Date().toISOString(), // Asigna la fecha actual si no se proporciona en la respuesta
          status: response.data.status || 1 // Asigna "activo" si no se proporciona en la respuesta
        };
        setTableData((prevData) => [...prevData, newWallet]);
      }

    } catch (error) {
      console.error("Error ::: ", error);
    }
  };

  return (
    <Layout className="hp-calendar hp-mb-32 hp-bg-dark-90">
      <Content>
      <Col span={24}>
            <PageContent
              title="Billeteras"
              desc="Podras agregar cualquier billetera siempre y cuando sea USDT TRC20"
              breadcrumb={[
                {
                  title: "wallets",
                },
              ]}
            />
          </Col>
        <Card>
          <div style={{ marginTop: "10px" }}>
            <Button onClick={showModal}>Añadir billetera</Button>
          </div>
          <Row>
            <Col flex="1 1" className="hp-py-24">
              <h5>Mis billeteras</h5>
              <Table dataSource={tableData} columns={columnas} />
            </Col>
          </Row>
        </Card>
      </Content>

      {/* Modal para agregar wallet */}
      <Modal
        title="Agregar Wallet"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleSubmit}
      >
         <Form layout="vertical" name="basic">
          {formFields.map((field) => (
            <div key={field.name}>
           
              <Form.Item
                label={
                  <span className="hp-input-label hp-text-color-black-100 hp-text-color-dark-0">
                    {field.label}
                  </span>
                }
                name={field.name}
              >
            <Input type="text" value={formData[field.name]} onChange={(e) => handleInputChange(e, field.name)} />
            </Form.Item>
            </div>
          ))}
          </Form>
      </Modal>
    </Layout>
  );
}
