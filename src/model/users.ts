import { Action,action } from "easy-peasy"
import { UserInterface } from "../Interfaces"

export interface UsersModel {
    users:UserInterface[],
    addUser:Action<UsersModel,UserInterface >,
    updateUser:Action<UsersModel,{user:UserInterface,id:number|null}>,
    deleteUser:Action<UsersModel,number>
}


const users : UsersModel = {
    users:[],
    addUser:action((state,payload) => {
        state.users.push(payload)
    }),
    updateUser:action((state,payload) => {
        if(payload.id === null) return;
        state.users[payload.id] = payload.user}),
    deleteUser:action((state,payload) => {state.users.splice(payload,1)})
}

export default users;