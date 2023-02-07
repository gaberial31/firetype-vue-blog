import { IUser } from "@/types/entities/user.interface";

export const getUserInitials = (user: IUser) => {
  return `${user?.firstname[0] || ""}${user?.lastname[0] || ""}`;
};
