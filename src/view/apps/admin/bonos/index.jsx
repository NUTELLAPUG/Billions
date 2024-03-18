import React, { useState } from "react";
import { Row, Col, Input, Button, Select, Card, message } from "antd";

export default function Usuarios() {
  const [porcentajePago, setPorcentajePago] = useState(0);
  const [diaPago, setDiaPago] = useState("Lunes"); // Valor predeterminado para el primer día del mes
  const [porcentajeROI, setPorcentajeROI] = useState(0);

  const handlePorcentajePagoChange = (value) => {
    setPorcentajePago(value);
  };

  const handleDiaPagoChange = (value) => {
    setDiaPago(value);
  };

  const handlePorcentajeROIChange = (value) => {
    setPorcentajeROI(value);
  };

  const handleGuardarConfiguracion = () => {
    // Aquí puedes enviar las configuraciones al servidor para su almacenamiento
    // y procesamiento adicional en el backend
    message.error("Aun no tienes permisos suficientes!")
  };

  const cardStyle = { height: "200px" }; // Establece la altura fija aquí

  return (
    <Row gutter={[16, 16]} className="hp-mb-32">
      <Col span={24}>
        <h3>Configuración de ROI</h3>
      </Col>
      <Col span={12}>
        <Card style={cardStyle}>
          <h3>Configuración de Porcentaje de Pago Mensual (ROI)</h3>
          <Input
            type="number"
            placeholder="Porcentaje de Pago Mensual"
            value="10"
            onChange={(e) => handlePorcentajePagoChange(e.target.value)}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card style={cardStyle}>
          <h3>Configuración del Día Específico de Pago (ROI) </h3>
          <Select
            style={{ width: "100%" }}
            placeholder="Día de Pago"
            value={diaPago}
            onChange={handleDiaPagoChange}
          >
            {[
              "Lunes",
              "Martes",
              "Miércoles",
              "Jueves",
              "Viernes",
              "Sábado",
              "Domingo",
            ].map((day) => (
              <Select.Option key={day} value={day}>
                {day}
              </Select.Option>
            ))}
          </Select>
        </Card>
      </Col>
      <Col span={24}>
        <h3>Configuración de Binario</h3>
      </Col>
      <Col span={12}>
        <Card style={cardStyle}>
          <h3>Configuración del Porcentaje de Binario</h3>
          <Input
            type="number"
            placeholder="Porcentaje de ROI"
            value="10"
            onChange={(e) => handlePorcentajeROIChange(e.target.value)}
          />
        </Card>
      </Col>

      
      <Col span={24}>
        <Button type="primary" onClick={handleGuardarConfiguracion}>
          Guardar Configuración
        </Button>
      </Col>
    </Row>
  );
}
