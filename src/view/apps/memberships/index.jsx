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
        const response = await axiosInstance.post("/api/memberships", {}, { headers });
        setTableData(response.data);
        console.log(tableData);
      } catch (error) {
        console.error("Error al obtener los retiros", error);
      }
    };
    
    useEffect(() => {
      fetchRetiros(); // Cuando el componente se monta, obtiene los datos de las wallets
    }, []);

    
    const customStatusGetter = (record) => {
      switch (record.status) {
        case 1:
          return "pendiente";
        case 2:
          return "rechazada";
        case 3:
          return "completado";
        default:
          return ""; // Manejar otros valores si es necesario
      }
    };
    
  // Columnas de la tabla
  const columnas = [
    {
      title: "ID",
      dataIndex: "bill_id",
      key: "bill_id"
    },
    {
      title: "PACK",
      dataIndex: "description",
      key: "id_pack"
    },
    {
      title: "DATE",
      dataIndex: "date_buyed",
      key: "date_buyed"
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (text, record) => customStatusGetter(record), // Utiliza el "value getter" personalizado
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
              title="Mis membresias"
              desc="Únete a nuestra comunidad y descubre un mundo de oportunidades con nuestras membresías exclusivas."
              breadcrumb={[
                {
                  title: "memberships",
                },
              ]}
            />
          </Col>

        <Card>
          <Row> 
            <Col flex="1 1" className="hp-py-24">
              <h5>Mis membresias</h5>
              <Table dataSource={tableData} columns={columnas} />
            </Col>
          </Row>
        </Card>
      </Content>
    </Layout>
  );
}
