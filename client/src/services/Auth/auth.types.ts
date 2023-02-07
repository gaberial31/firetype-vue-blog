/* eslint-disable prettier/prettier */
import { IUser } from "@/types/entities/user.interface";

// * Types for form data
export type SignInParams = Required<Pick<IUser, "email" | "password">>;
export type SignUpParams = Required<Pick<IUser,"email" | "password" | "username" | "firstname" | "lastname">>;
export type ResetPasswordParams = Pick<IUser, "email">;

// * Types for auth service
export type SignIn = ({ email, password }: SignInParams) => void;
export type SignUp = ({ email, password, username, firstname, lastname}: SignUpParams) => void;
export type ResetPassword = ({ email }: ResetPasswordParams) => void;
