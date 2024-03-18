import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal, Form, Input, message, Card, Select, Divider, Upload } from "antd";
import { DataGrid } from "@mui/x-data-grid";
import AxiosInstance from "../../../../axiosInstance";
import { RiUploadCloud2Fill } from "react-icons/ri";

export default function Packs() {
  const [data, setData] = useState([]);
  const [selectedTable, setSelectedTable] = useState("packs"); // Tabla de packs
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState(null); // Estado para almacenar la información de la imagen seleccionada
  const [editingRecord, setEditingRecord] = useState(null);
  const getRowId = (row) => row.pack_id;

  const handleImageBeforeUpload = (file) => {
    // Captura la información del archivo seleccionado
    setSelectedImage(file);
    return true; // Evita la carga automática de la imagen
  };


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
      field: "pack_id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "description",
      headerName: "Descripción",
      width: 200,
    },
    {
      field: "price",
      headerName: "Precio",
      type: "number",
      width: 120,
    },
    {
      field: "roi",
      headerName: "ROI",
      type: "number",
      width: 120,
    },
    {
      field: "months",
      headerName: "Meses",
      type: "number",
      width: 120,
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

  const serverAddress = `http://${window.location.hostname}:3002/api/upload`;

  console.log(serverAddress)

  const onFinish = async (values) => {
    try {
      if (editingRecord) {
        // Si hay un registro en edición, actualiza el registro existente
        const formData = new FormData();
        formData.append('image', selectedImage); // Usa la imagen seleccionada en lugar de values.image[0]
        
        const uploadResponse = await AxiosInstance.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const imageUrl = uploadResponse.data.url;

      if (imageUrl) {
        values.image_url = imageUrl;
      }
      
      await AxiosInstance.put(`/api/${selectedTable}/${editingRecord.pack_id}`, values);

      } else {

        const formData = new FormData();
        formData.append('image', selectedImage); // Usa la imagen seleccionada en lugar de values.image[0]
        
        const uploadResponse = await AxiosInstance.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const imageUrl = uploadResponse.data.url;

        if (imageUrl) {
          // Agrega la URL de la imagen a los datos del paquete
          values.image_url = imageUrl;
  
          // Realiza la solicitud PUT para crear un nuevo paquete con la URL de la imagen
          await AxiosInstance.put(`/api/${selectedTable}/0`, values);
  
          setVisible(false);
          history.push('/paquetes');
        } else {
          // Maneja el caso si no se pudo subir la imagen
          message.error("No se pudo subir la imagen");
        }

       
      }

      setVisible(false);

      const updatedData = data.map((item) =>
        item.pack_id === (editingRecord ? editingRecord.pack_id : null)
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
   

        <div style={{ height: 400, width: "100%"  }}>
        <Card className="hp-border-color-black-40 hp-card-2">
        <h3>Paquetes</h3>
        <Divider></Divider>
        <Button type="primary" onClick={handleAdd}>
          Agregar paquete
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
        title={editingRecord ? "Editar paquete" : "Agregar paquete"}
        visible={visible}
        onCancel={onCancel}
        onOk={form.submit}
      >
        <Form form={form} name="editPackForm" onFinish={onFinish}>
        <Form.Item
          label="Imagen"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e && [e.file]; // Limitar a un solo archivo
          }}
          rules={[
            {
              required: !editingRecord,
              message: "Por favor, selecciona una imagen",
            },
          ]}
        >
          <Upload name="image" action={serverAddress}
            listType="picture"
            beforeUpload={handleImageBeforeUpload} // Manejador para capturar información del archivo
            >
            <Button icon={<RiUploadCloud2Fill />}>Seleccionar Imagen</Button>
          </Upload>
        </Form.Item>
          <Form.Item
            label="Descripción"
            name="description"
           
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Precio"
            name="price"
          
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="ROI"
            name="roi"
           
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Meses"
            name="months"
           
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Row>
  );
}
