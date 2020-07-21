import { Dispatch } from "redux";
import RootState from "../store";

export const GET_FILES = "GET_FILES";

export const DELETE_FILE = "DELETE_FILE";

export const ADD_FILE = "ADD_FILE";

export const GET_ERRORS = "GET_ERRORS";

export const CREATE_MESSAGE = "CREATE_MESSAGE";

export const USER_LOADING = "USER_LOADING";

export const USER_LOADED = "USER_LOADED";

export const AUTH_ERROR = "AUTH_ERROR";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const REGISTER_FAIL = "REGISTER_FAIL";

export const CLEAR_LEADS = "CLEAR_LEADS";

export const GOOGLE_AUTH = "GOOGLE_AUTH";

export const LOGOUT_GOOGLE = "LOGOUT_GOOGLE";

export const GET_CLASSES = "GET_CLASSES";

export const DELETE_CLASS = "DELETE_CLASS";

export const ADD_CLASS = "ADD_CLASS";

export const SET_CURR_CLASS = "SET_CURR_CLASS";

export const CLASSES_LOADED = "CLASSES_LOADED";

export const FILES_LOADING = "FILES_LOADING";

export const SET_CURRENT_ADD_FILE = "SET_CURRENT_ADD_FILE";

/** Redux state types */
export interface IFiles {
  id: number;
  file_id: string;
  file_type: string;
  file_name: string;
  file_view_link: string;
  file_icon_link: string;
  file_created_at: string;
  college_class: number;
}
export interface IFilesState {
  files: Array<IFiles>;
  isLoading: boolean;
}

export interface IErrorsState {
  message: any;
  status: string;
}

export interface IMessagesState {
  message: any;
  status: string;
}

export interface IAuthState {
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: { id: number; username: string; email: string };
}

export interface IGoogleState {
  isGoogleAuth: boolean;
}

export interface IClasses {
  id?: number;
  name: string;
  owner?: number;
  color?: string;
}
export interface IClassesState {
  classes: Array<IClasses>;
  current_class: string;
  classes_loaded: boolean;
}

export interface IReactState {
  current_add_file: string;
}

export interface IRootState {
  files: IFilesState;
  errors: IErrorsState;
  messages: IMessagesState;
  auth: IAuthState;
  google: IGoogleState;
  classes: IClassesState;
  react: IReactState;
}

/** Redux action types */

export interface IActionAuth {
  type:
    | typeof USER_LOADING
    | typeof USER_LOADED
    | typeof LOGIN_SUCCESS
    | typeof LOGOUT_SUCCESS
    | typeof AUTH_ERROR
    | typeof LOGIN_FAIL
    | typeof REGISTER_SUCCESS
    | typeof REGISTER_FAIL;
  payload?: any;
}

export interface IActionClasses {
  type:
    | typeof GET_CLASSES
    | typeof DELETE_CLASS
    | typeof ADD_CLASS
    | typeof SET_CURR_CLASS
    | typeof CLASSES_LOADED;
  payload?: any;
}

export interface IActionErrors {
  type: typeof GET_ERRORS;
  payload?: any;
}

export interface IActionFiles {
  type:
    | typeof GET_FILES
    | typeof DELETE_FILE
    | typeof ADD_FILE
    | typeof FILES_LOADING;
  payload?: any;
}

export interface IActionGoogle {
  type: typeof GOOGLE_AUTH | typeof LOGOUT_GOOGLE;
  payload?: any;
}

export interface IActionMessages {
  type: typeof CREATE_MESSAGE;
  payload?: any;
}

export interface IActionReact {
  type: typeof SET_CURRENT_ADD_FILE;
  payload?: any;
}

export interface ConfigTypes {
  headers: {
    "Content-Type": string;
    Authorization?: string;
  };
}

export interface CredentialTypes {
  username: string;
  password: string;
  email: string;
}
