import {action, createStore} from "easy-peasy"
import {StoreModel, } from "./Interfaces"


export const store = createStore<StoreModel>({
    users:[],
    addUser:action((state,payload) => {
        state.users.push(payload)
    }),
    updateUser:action((state,payload) => {state.users[payload.id] = payload.user}),
    deleteUser:action((state,payload) => {state.users.splice(payload,1)})
})