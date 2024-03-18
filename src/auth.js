// auth.js

import axios from "axios";
import Cookies from "js-cookie";
import AxiosInstance from "../src/axiosInstance";

// Función para verificar si el token es válido
export const verifyToken = async () => {
  // Verifica si el token está presente en las cookies
  const token = Cookies.get("token");

  if (!token) {
    // Si el token no está presente, lanza un error
    throw new Error("Token no encontrado");
  } else {
    try {
      // Hace una solicitud al servidor para verificar el token
      const response = await AxiosInstance.get("/protected", {
        headers: {
          Authorization: token,
        },
      });

      return response.data;
    } catch (error) {
      // Si hay un error al verificar el token, lanza un error
      throw new Error("Token inválido");
    }
  }
};
