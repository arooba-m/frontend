import { create } from "zustand";

export interface IUser {
    id?: string,
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string,
    isDeleting?: boolean
}

export interface IUserStore {
    users?: IUser[], //all users
    user?: IUser, //new user to register/ specific user by id
    currentUser?: IUser //current logged in user,
    // setUser: (user: IUser) => void,
    // setCurrentUser: (user: IUser) => void
}

const userStore = create<IUserStore> ( () => ({
    users: undefined,
    user: undefined,
    currentUser: undefined,
    // setUsers: (user: IUser) => set((state) => ({users:[...state.users, user]})),
    // setUser: (user: IUser) => set((state) => ({...state, user: user})),
    // setCurrentUser: (user: IUser) => set((state) => ({...state, currentuser: user})),
}))

export default userStore;
