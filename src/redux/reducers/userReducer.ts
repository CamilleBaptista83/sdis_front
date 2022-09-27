import { TYPES } from "../actions/actionTypes";
import { IUser, UserAction, UserState } from "../Interfaces/typeUser";

const initialState : UserState = {
  user : [
    {
      id:1,
      email : "test@test.fr",
      password : "12345"
    }
  ]
}

const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case TYPES.USER.ADD:
      const newUser: IUser = {
        id: Math.random(), // not really unique
        email: action.user.email,
        password: action.user.password,
      }
      return {
        ...state,
        user: state.user.concat(newUser),
      }
    case TYPES.USER.REMOVE:
      const removeUser: IUser[] = state.user.filter(
        usr => usr.id !== action.user.id
      )
      return {
        ...state,
        user: removeUser,
      }
  }
  return state
}

export default userReducer
