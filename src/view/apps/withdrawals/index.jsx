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
  const [tableData, setTableData] = useState(null); // Estado para los datos de retiros
  const token = Cookies.get("token");
  
    // Define los campos del formulario en un objeto JSON
    const formFields = [
      {
        label: "Wallet Label",
        name: "name",
      },
      {
        label: "Usdt Wallet Address",
        name: "wallet",
      },
      {
        label: "Google Authenticator",
        name: "code",
      },
      // Agrega más campos aquí si es necesario
    ];

      // Función para manejar la edición de un registro
  const handleEdit = (record) => {
    // Implementa la lógica de edición aquí
    message.success(`Editando wallet ID: ${record.wallet_id}`);
  };

  // Función para manejar la eliminación de un registro
  const handleDelete = (walletId) => {
    // Implementa la lógica de eliminación aquí
    message.success(`Eliminando wallet ID: ${walletId}`);
  };


    const fetchRetiros = async () => {
      const token = Cookies.get("token");
      const headers = {
        'Authorization': token // Adjunta el token en el encabezado de autorización
      };
      try {
        const response = await axiosInstance.post("/api/withdrawals", {}, { headers });
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
      dataIndex: "withdrawal_id",
      key: "withdrawal_id"
    },
    {
      title: "TOTAL",
      dataIndex: "total",
      key: "total"
    },
    {
      title: "WALLET",
      dataIndex: "wallet_name",
      key: "wallet_name"
    },
    {
      title: "DATE",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status"
    },
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
        setIsModalVisible(false);
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
              title="Retiros"
              desc="Retiros todos los viernes desde 00:00 horas hasta sábado 00:00 horas."
              breadcrumb={[
                {
                  title: "withdrawals",
                },
              ]}
            />
          </Col>

        <Card>
          <Row>
        

            <Col flex="1 1" className="hp-py-24">
              <h5>Mis retiros</h5>
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
