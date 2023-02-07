export interface IUser {
  email: string;
  password?: string;

  username: string;
  firstname: string;
  lastname: string;

  admin?: boolean;

  uid: string;
}

export type FirebaseUser = Omit<IUser, "password" | "admin" | "uid">;
