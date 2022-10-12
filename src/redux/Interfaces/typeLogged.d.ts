import { type } from "os"

interface ILogged {
  access_token?: string
  refresh_token: string
}

type LoggedState = {
  token: ILogged
}

type LoggedAction = any;

type DispatchType = (args: LoggedAction) => LoggedAction