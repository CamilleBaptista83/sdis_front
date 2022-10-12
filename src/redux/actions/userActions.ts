import CustomAxios from "../../services/Interceptor/CustomAxios";
import { DispatchType, UserAction } from "../Interfaces/typeUser";
import { TYPES } from "./actionTypes";
import { routesApi } from "../../services/RoutesApi"

let baseUrl = process.env.REACT_APP_URL_BACK;

const getUser = () => {

  return (dispatch: DispatchType) => {
    setTimeout(() => {
      //APPEL API
      CustomAxios.get(baseUrl + routesApi.USERS).then((response) => {
        //SET ACTION
        const action: UserAction = {
          type: TYPES.USER.GET,
          user: response.data
        }
        //DISPATCH ACTION
        dispatch(action)
      });
    }, 500)
  }
};

export const userActions = {
  getUser
} 