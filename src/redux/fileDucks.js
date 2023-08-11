import axios from "axios";

//constantes
const dataInicial = {
  results: [],
  loading: false,
  unFile: null,
  upFile: false,
};

//types
const LOADING = "LOADING";
const GET_FILE_SUCCESS = "GET_FILE_SUCCESS";
const INFO_FILE_SUCCESS = "INFO_FILE_SUCCESS";
const UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS";
const FILE_ERROR = "FILE_ERROR";
const RESTABLECER = "RESTABLECER";

//reducer
export default function fileReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        unFile: null,
        upFile: false,
        results: action.payload,
      };
    case INFO_FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        unFile: action.payload,
        upFile: false,
      };
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        unFile: null,
        upFile: true,
      };
    case FILE_ERROR:
      return { ...dataInicial };
    case RESTABLECER:
      return { ...dataInicial };
    default:
      return state;
  }
}

//actions
export const getFileAction = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    //console.log("buscando los datos de api");
    const url = "https://api-pymesplus.up.railway.app/files";
    const config = {
      headers: {
        accept: "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    };
    const res = await axios.get(url, config);
    //console.log(res.data);
    dispatch({
      type: GET_FILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    //console.log(error);
    dispatch({
      type: FILE_ERROR,
    });
  }
};

export const restablecerAccion = () => (dispatch) => {
  dispatch({
    type: RESTABLECER,
  });
};

export const buscarFile = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    //console.log("buscando los datos de api");
    const url = "https://api-pymesplus.up.railway.app/files/" + id;
    const config = {
      headers: {
        accept: "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    };
    const res = await axios.get(url, config);
    //console.log(res.data);
    dispatch({
      type: GET_FILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    //console.log(error);
    dispatch({
      type: FILE_ERROR,
    });
  }
};

export const uploadFileAccion = (archivo, costo) => async (dispatch) => {
  //console.log(archivo);
  dispatch({
    type: LOADING,
  });
  try {
    //console.log("Subiendo Archivo");
    const url = "https://api-pymesplus.up.railway.app/upload";
    const config = {
      headers: {
        accept: "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
        "Content-Type": "multipart/form-data",
      },
    };
    const data = new FormData();
    data.append("file", archivo);
    data.append("costos", costo);
    const res = await axios.post(url, data, config);
    //console.log(res.data);
    dispatch({
      type: UPLOAD_FILE_SUCCESS,
    });
  } catch (error) {
    //console.log(error);
    dispatch({
      type: FILE_ERROR,
    });
  }
};

export const procesarAccion = (id, pcb, pdr) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    console.log("archivo a procesar");
    const url =
      "https://api-pymesplus.up.railway.app/file_to_process/" +
      id +
      "/" +
      pcb +
      "/" +
      pdr;
    const config = {
      headers: {
        accept: "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    };
    const res = await axios.get(url, config);
    console.log(res.data != null ? res.data : "null");
    dispatch({
      type: INFO_FILE_SUCCESS,
      payload: res.data[0],
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FILE_ERROR,
    });
  }
};
