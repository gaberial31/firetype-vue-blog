import { IUser } from "@/types/entities/user.interface";

// * Params
export type UserFirestoreParams = Omit<IUser, "password">;

// * Type for function witch add user in firestore
export type GetUserById = ( uid: IUser["uid"] ) => Promise<IUser>;

export type FirestoreAction = ({ uid, email, username, firstname, lastname }: UserFirestoreParams) => void;

export type AddUser = ({ uid, email, username, firstname, lastname }: UserFirestoreParams) => void;
export type UpdateUserInfo = ({ uid, email, username, firstname, lastname }: UserFirestoreParams) => void;