import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../axios';
import SHA256 from 'crypto-js/sha256';
import { message } from 'antd';
import Cookies from 'js-cookie';
import { setUserData } from '../../redux/actions/userActions';

const useHandleLogin = () => {
 const dispatch = useDispatch();
 const history = useHistory();
 const userData = useSelector((state) => state.userReducer.userData);

 const handleLogin = async (username, password) => {
    try {
      // Genera un hash (resumen) de la contraseña antes de enviarla al servidor
      const hashedPassword = SHA256(password).toString();
      const response = await axiosInstance.post("/login", { username, password: hashedPassword });

      const token = response.data.token;
      Cookies.set('token', token);

      try {
        const response = await axiosInstance.get("/user", {
          headers: {
            Authorization: token,
          },
        });

        // Almacena los datos del usuario en el estado global de Redux
        dispatch(setUserData(response.data));

        if (response.data.role === 1) {
          // Puedes agregar redirecciones específicas para diferentes roles aquí
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario", error);
      }

      history.push('/');
    
    } catch (error) {
      message.error('Incorrect username or password');
      console.error('Error:', error);
    }
  };

 return { handleLogin, userData };
};

export default useHandleLogin;