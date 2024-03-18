import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Badge, Row, Col, Dropdown, Divider, Avatar } from "antd";
import { Moon, Sun } from 'iconsax-react'; // Importa los íconos Moon y Sun

export default function HeaderThemeSwitcher() {
  const direction = useSelector(state => state.customise.direction);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    console.log(theme)
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    themeRefActive(newTheme);
    location.reload()
  };

  const themeRefActive = (theme) => {
    // Implementa la lógica para aplicar los estilos del tema aquí
  };

  return (
    <Col className="hp-d-flex-center">
      <Button
        ghost
        type="primary"
        className="hp-border-none hp-hover-bg-black-10 hp-hover-bg-dark-100"
        icon={
          <div className="hp-position-relative">
            <div className="hp-position-absolute" style={direction === "rtl" ? { left: -5, top: -5 } : { right: -5, top: -5 }}>
              <Badge
                dot
                status="processing"
              />
            </div>
            {theme === "light" ? (
              <Moon size="22" className="hp-text-color-black-80 hp-text-color-dark-30" /> // Icono de la luna para el tema light
            ) : (
              <Sun size="22" className="hp-text-color-black-80 hp-text-color-dark-30" /> // Icono del sol para el tema dark
            )}
          </div>
        }
        onClick={toggleTheme}
      />
    </Col>
  );
}
