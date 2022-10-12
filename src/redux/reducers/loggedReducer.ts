import { TYPES } from "../actions/actionTypes";
import { IUser, UserAction, UserState } from "../Interfaces/typeUser";


let initialState: boolean = false

const loggedReducer = (state = initialState, action: any) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "getLogged":
      console.log(action);
      return action.payload
    case "setDisconnected":
      return action.payload
    default:
      return state
  }
}

export default loggedReducer