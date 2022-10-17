import CustomAxios from "../../services/Interceptor/CustomAxios";
import { DispatchType, LoggedAction } from "../Interfaces/typeLogged";
import { TYPES } from "./loggedTypes";
import axios from "axios";
import { routesApi } from "../../services/RoutesApi"

let baseUrl = process.env.REACT_APP_URL_BACK;
baseUrl = 'http://localhost:8080/';


const getLogged = (data: any, navigate?: any) => {
  console.log(data)
  return (dispatch: DispatchType) => {
    axios
      .get(baseUrl + routesApi.LOGIN, { params: data })
      .then(function (response) {
        console.log(response)
        if (response.status === 200) {
          dispatch({
            type: "getLogged",
            payload: true,
          });
          localStorage.setItem("accessToken", response.data.access_token);
          localStorage.setItem(
            "refreshToken",
            response.data.refresh_Token
          );

          console.log(response.data)
          // navigate(LiensInternes.DASHBOARD.base);
          // dispatch(alertActions.clear());
        }
      })
      .catch(function (error) {
        console.log(error)
        // let message;
        // message = switchCode(error.response.data.code);
        // dispatch(alertActions.error(message));
      });
  };
};

export const loggedActions = {
  getLogged
} 