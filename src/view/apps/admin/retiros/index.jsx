import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal, Form, Input, message, Card } from "antd";
import { DataGrid } from "@mui/x-data-grid";
import AxiosInstance from "../../../../axiosInstance";

export default function Retiros() {
  const [data, setData] = useState([]);
  const [selectedTable, setSelectedTable] = useState("retiros"); // Tabla de retiros
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingRecord, setEditingRecord] = useState(null);
  const getRowId = (row) => row.withdrawal_id;

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
      field: "withdrawal_id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "username",
      headerName: "Usuario",
      width: 150,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      width: 120,
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 200,
    },
    {
      field: "wallet",
      headerName: "Wallet",
      width: 150,
    },
    {
      field: "status",
      headerName: "Estado",
      width: 150,
      valueGetter: (params) => {
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
      },
    },
  ];

  const handleAdd = () => {
    form.resetFields();
    setVisible(true);
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
        await AxiosInstance.put(`/api/${selectedTable}/${editingRecord.withdrawal_id}`, values);
      } else {
        // Si no hay un registro en edición, agrega un nuevo registro
        await AxiosInstance.post(`/api/${selectedTable}`, values);
      }

      setVisible(false);

      const updatedData = data.map((item) =>
        item.withdrawal_id === (editingRecord ? editingRecord.withdrawal_id : null)
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
        <div style={{ height: 400, width: "100%"}}>
        <Card className="hp-border-color-black-40 hp-card-2">
        <h3>Retiros</h3>
          <DataGrid
            getRowId={getRowId} // Esta función especifica cómo obtener el id de la fila
            rows={data}
            columns={columns}
            onRowClick={(params) => handleEdit(params.row)}
          />
        </Card>
        </div>
      </Col>
      <Modal
        title="Retiros"
        visible={visible}
        onCancel={onCancel}
        onOk={form.submit}
      >
        <Form form={form} name="editRetiroForm" onFinish={onFinish}>
          <Form.Item
            label="Usuario"
            name="user_id"
            rules={[{ required: true, message: "Por favor ingrese el usuario" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Total"
            name="total"
            rules={[{ required: true, type: "number", message: "Por favor ingrese el total" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Fecha"
            name="date"
            rules={[{ required: true, message: "Por favor ingrese la fecha" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Wallet"
            name="wallet"
            rules={[{ required: true, message: "Por favor ingrese la wallet" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Estado"
            name="status"
            rules={[{ required: true, message: "Por favor seleccione el estado" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Row>
  );
}
