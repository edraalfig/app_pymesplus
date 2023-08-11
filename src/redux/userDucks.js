import axios from "axios";

//constantes
const dataInicial = {
  loading: false,
  activo: false,
  isError: false,
  isNew: false,
};

//types
const LOADING = "LOADING";
const USUARIO_ERROR = "USUARIO_ERROR";
const USUARIO_EXITO = "USUARIO_EXITO";
const USUARIO_REGISTRADO = "USUARIO_REGISTRADO";
const CERRAR_SESION = "CERRAR_SESION";

//reducer
export default function usuarioReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, isNew: false };
    case USUARIO_ERROR:
      return { ...state, loading: false, isError: true };
    case USUARIO_EXITO:
      return { ...state, loading: false, activo: true };
    case USUARIO_REGISTRADO:
      return { ...state, loading: false, isNew: true };
    case CERRAR_SESION:
      return { ...dataInicial };
    default:
      return state;
  }
}

//actions
export const ingresoUserAccion = (user, pass) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const url = "https://api-pymesplus.up.railway.app/token";
    const config = {
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const params = new URLSearchParams();
    params.append("username", user);
    params.append("password", pass);
    console.log("ingreso api/token");
    const res = await axios.post(url, params, config);
    if (res.status == 200) {
      //console.log("Data ingreso user accion:", res.data);
      console.log("Token:", res.data.access_token);
      localStorage.setItem(
        "token",
        JSON.stringify("Bearer " + res.data.access_token)
      );
      dispatch({
        type: USUARIO_EXITO,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: USUARIO_ERROR,
    });
  }
};

export const registroUserAccion = (user, pass) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const url = "https://api-pymesplus.up.railway.app/signup";
    const config = {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const dataBody = {
      username: user,
      password: pass,
    };
    const res = await axios.post(url, JSON.stringify(dataBody), config);
    if (res.status == 200) {
      console.log("Usuario Registrado");
      dispatch({
        type: USUARIO_REGISTRADO,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: USUARIO_ERROR,
    });
  }
};

export const cerrarSesionAccion = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: CERRAR_SESION,
  });
};
