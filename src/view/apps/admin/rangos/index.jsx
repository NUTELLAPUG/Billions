import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal, Form, Input, message, Card, Select, Divider } from "antd";
import { DataGrid } from "@mui/x-data-grid";
import AxiosInstance from "../../../../axiosInstance";
import { CardHeader } from "@mui/material";

export default function Packs() {
  const [data, setData] = useState([]);
  const [selectedTable, setSelectedTable] = useState("ranks"); // Tabla de packs
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  
  const getRowId = (row) => row.rango_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.post(`/api/${selectedTable}`);
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, [selectedTable]);

  const columns = [
    {
      field: "rango_id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "rango_nombre",
      headerName: "Descripción",
      width: 200,
    },
    {
      field: "puntos",
      headerName: "Puntos",
      type: "number",
      width: 120,
    },
    {
      field: "imagen",
      headerName: "Imagen",
      type: "text",
      width: 120,
    },
    {
      field: "puntos_inicio",
      headerName: "Puntos Inicio",
      type: "number",
      width: 120,
    },
    {
      field: "puntos_final",
      headerName: "Puntos Final",
      type: "number",
      width: 120,
    },
    {
      field: "estado",
      headerName: "Estado",
      type: "number",
      width: 120,
      valueGetter: (params) => {
        switch (params.value) {
          case 1:
            return "Activo";
          case 2:
            return "Inactivo";
          default:
            return "";
        }
      },
    },
  ];

  const handleAdd = () => {
    form.resetFields();
    setVisible(true);
    setEditingRecord(null);
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue(record);
    setVisible(true);
  };

  const onFinish = async (values) => {
    try {
      if (editingRecord) {
        // Si hay un registro en edición, actualiza el registro existente
        await AxiosInstance.put(`/api/${selectedTable}/${editingRecord.rango_id}`, values);
      } else {
        // Si no hay un registro en edición, agrega un nuevo registro
        const response = await AxiosInstance.put(`/api/${selectedTable}/0`, values);
  
        // Obtén el ID del nuevo rango del servidor, si es necesario
        const newRangoId = response.data.newRangoId;
        
        // Crea un nuevo objeto de rango con los valores proporcionados
        const newRango = {
          rango_id: newRangoId, // Asigna el nuevo ID aquí
          ...values,
        };
  
        // Agrega el nuevo rango a la tabla de datos
        const updatedData = [...data, newRango];
        setData(updatedData);

        setVisible(false);
        history.push('/rangos');
      }

      setVisible(false);

      const updatedData = data.map((item) =>
        item.rango_id === (editingRecord ? editingRecord.rango_id : null)
          ? { ...item, ...values }
          : item
      );

      message.success("Operación exitosa");

      setData(updatedData);
      setEditingRecord(null);
      
    } catch (error) {
      console.error("Error al actualizar o agregar el registro:", error);
    }
  };

  const onCancel = () => {
    setEditingRecord(null);
    setVisible(false);
  };


  return (
    <Row gutter={[64, 64]} className="hp-mb-32">
      <Col span={24}>
   

        <div style={{}}>
        <Card className="hp-border-color-black-40 hp-card-2">
        <h3>Rangos</h3>
        <Divider></Divider>
        <Button type="primary" onClick={handleAdd}>
          Agregar Rango
        </Button>
        

          <DataGrid
          style={{marginTop: "10px"}}
            getRowId={getRowId} // Esta función especifica cómo obtener el id de la fila
            rows={data}
            columns={columns}
            onRowClick={(params) => handleEdit(params.row)}
          />
        </Card>
        </div>
      </Col>
      <Modal
        title={editingRecord ? "Editar Rango" : "Agregar Rango"}
        visible={visible}
        onCancel={onCancel}
        onOk={form.submit}
      >
        <Form form={form} name="editPackForm" onFinish={onFinish}>
          <Form.Item
            label="Rango nombre"
            name="rango_nombre"
           
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Puntos"
            name="puntos"
          
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Imagen"
            name="imagen"
           
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Puntos Inicio"
            name="puntos_inicio"
           
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Puntos Final"
            name="puntos_final"
           
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Estado"
            name="estado" 
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
