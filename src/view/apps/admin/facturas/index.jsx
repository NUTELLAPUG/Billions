import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal, Form, Input, message, Card, Select } from "antd";
import { DataGrid } from "@mui/x-data-grid";
import AxiosInstance from "../../../../axiosInstance";

export default function Bills() {
  const [data, setData] = useState([]);
  const [selectedTable, setSelectedTable] = useState("bills"); // Tabla de facturas
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingRecord, setEditingRecord] = useState(null);
  const getRowId = (row) => row.bill_id;

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
      field: "bill_id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "description",
      headerName: "Paquete",
      width: 150,
    },
    {
      field: "username",
      headerName: "Propietario",
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
    {
      field: "date_buyed",
      headerName: "Fecha de Compra",
      width: 200,
    },
    {
      field: "voucher",
      headerName: "Voucher",
      width: 150,
      valueGetter: (params) => {
        switch (params.row.voucher) {
          case 1:
            return "Inactivo";
          case 2:
            return "Activo";
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
        await AxiosInstance.put(`/api/${selectedTable}/${editingRecord.bill_id}`, values);
      } else {
        // Si no hay un registro en edición, agrega un nuevo registro
        await AxiosInstance.post(`/api/${selectedTable}`, values);
      }

      setVisible(false);

      const updatedData = data.map((item) =>
        item.bill_id === (editingRecord ? editingRecord.bill_id : null)
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
        <div>
        <Card className="hp-border-color-black-40 hp-card-2">
        <h3>Paquetes</h3>
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
        title="Facturas"
        visible={visible}
        onCancel={onCancel}
        onOk={form.submit}
      >
        <Form form={form} name="editBillForm" onFinish={onFinish}>
          <Form.Item
            label="ID del Pack"
            name="id_pack"
            rules={[{ required: true, message: "Por favor ingrese el ID del Pack" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="ID del Propietario"
            name="owner_id"
            rules={[{ required: true, message: "Por favor ingrese el ID del Propietario" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Estado"
            name="status"
            rules={[{ required: true, message: "Por favor ingrese el Estado" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Fecha de Compra"
            name="date_buyed"
            rules={[{ required: true, message: "Por favor ingrese la Fecha de Compra" }]}
          >
            <Input />
          </Form.Item>
	 <Form.Item
              label="Voucher"
              name="voucher"
            
            >
              <Select>
                <Option value={2}>Activado</Option>
                <Option value={1}>Desactivado</Option>
              </Select>
            </Form.Item>
        </Form>
      </Modal>
    </Row>
  );
}
