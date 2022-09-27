import CustomAxios from "../../services/Interceptor/CustomAxios";
import { DispatchType, UserAction } from "../Interfaces/typeUser";
import { TYPES } from "./actionTypes";

let baseUrl = process.env.REACT_APP_URL_BACK;

export const getUsers = () => {

  return (dispatch: DispatchType) => {
    setTimeout(() => {
      //APPEL API
      CustomAxios.get(baseUrl + routesApi.USER).then((response) => {
      //SET ACTION
      const action: UserAction = {
        type: TYPES.USER.GET,
        user : response.data 
      }     
      //DISPATCH ACTION
      dispatch(action)
      });
    }, 500)
  }
};
