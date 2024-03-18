import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal, Form, Input, message, Card, Select } from "antd";
import { DataGrid } from "@mui/x-data-grid";
import AxiosInstance from "../../../../axiosInstance";

const getRowId = (row) => row.user_id; // Función para obtener el ID de la fila

export default function Usuarios() {
  const [data, setData] = useState([]);
  const [selectedTable, setSelectedTable] = useState("users"); // Tabla predeterminada
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingRecord, setEditingRecord] = useState(null); // Para rastrear el registro en edición

  useEffect(() => {
    // Función para obtener datos de la tabla seleccionada
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.post(`/api/${selectedTable}`); // Cambia la URL según tu ruta en Node.js
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, [selectedTable]);

  const columns = [
    {
      field: 'user_id',
      headerName: 'ID',
      width: 100,
    },
    {
      field: 'firstName',
      headerName: 'Nombre',
      width: 200,
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 200,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      field: 'referrer',
      headerName: 'Referido',
      width: 200,
    },
   {
	field: 'status_user',
	headerName: 'Estado',
	width: 200,
  valueGetter: (params) => {
        switch (params.value) {
          case 1:
            return 'Activo';
          case 2:
            return 'Inactivo';
          default:
            return ''; // Otra opción por defecto si el valor no es 1 ni 2
        }
      },
},
  ];

  const handleAdd = () => {
    form.resetFields();
    setVisible(true);
  };

  const handleEdit = (record) => {
    // Cuando se hace clic en "Editar", establece el registro en edición y muestra el modal de edición.
    setEditingRecord(record);
    form.setFieldsValue(record);
    setVisible(true);
  };

  const handleDelete = (record) => {
    // Implementa la lógica de eliminación aquí
    console.log('Eliminar registro:', record);
  };

  const onFinish = async (values) => {
    try {
      // Actualiza el registro en la base de datos utilizando Axios o la librería que prefieras
      await AxiosInstance.put(`/api/${selectedTable}/${editingRecord.user_id}`, values);
      setVisible(false);
      // Actualiza la tabla con los nuevos datos
      const updatedData = data.map((item) =>
        item.user_id === editingRecord.user_id ? { ...item, ...values } : item
      );
      message.success("¡Operación exitosa!");
      setData(updatedData);
      setEditingRecord(null);
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
    }
  };

  const onCancel = () => {
    setEditingRecord(null);
    setVisible(false);
  };

  return (
    <Row gutter={[64, 64]} className="hp-mb-32">
      <Col span={24}>
     

       
        <Card className="hp-border-color-black-40 hp-card-2">

          <DataGrid
            rows={data}
            columns={columns}
            getRowId={getRowId} // Esta función especifica cómo obtener el ID de la fila
            onRowClick={(params) => handleEdit(params.row)}
            disableSelectionOnClick // Para desactivar la selección al hacer clic en una fila
            componentsProps={{
              toolbar: {
                // Activa la barra de búsqueda
                searchPlaceholder: "Buscar usuarios",
              },
            }}
          />
        </Card>
     
      </Col>
      <Modal
        title="Usuarios"
        visible={visible}
        onCancel={onCancel}
        onOk={form.submit}
      >
        <Form
          form={form}
          name="editUserForm"
          onFinish={onFinish}
        >
          <Form.Item
            label="Nombre"
            name="firstName"
            rules={[{ required: true, message: 'Por favor ingrese el nombre' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Por favor ingrese el nombre de usuario' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Correo"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Por favor ingrese un correo válido' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Referido"
            name="referrer"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Estado"
            name="status_user"
          >
            <Select>
              <Option value="1">Activo</Option>
              <Option value="2">Inactivo</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </Row>
  );
}
