import { type } from "os"

interface IUser {
  id?: number
  email: string
  password: string
}

type UserState = {
  user: IUser[]
}

type UserAction = {
  type: string
  user: IUser
}

type DispatchType = (args: UserAction) => UserAction