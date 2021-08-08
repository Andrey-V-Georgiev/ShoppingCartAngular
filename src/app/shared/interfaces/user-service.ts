export interface IUserLogin {
    username: string;
    email: string;
    token: string;
}

export interface IUserServiceState {
    currentUser: IUserLogin | null | undefined; 
}