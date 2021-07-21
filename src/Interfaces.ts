import { Action } from "easy-peasy";

export interface UserInterface {
    name:string,
    age?:string,
    gender?:string
  }

  export interface StoreModel {
    users:UserInterface[],
    addUser?:Action<StoreModel,UserInterface >,
    updateUser?:Action<StoreModel,{user:UserInterface,id:number}>,
    deleteUser?:Action<StoreModel,number>
  }