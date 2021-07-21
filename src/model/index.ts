import users , {UsersModel} from "./users"

 export interface StoreModel {
    users:UsersModel
}

const model : StoreModel = {
    users
}

export default model;