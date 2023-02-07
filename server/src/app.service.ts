import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as admin from "firebase-admin";

@Injectable()
export class AppService {
  async addAdminRole(email: string) {
    try {
      const user = await admin.auth().getUserByEmail(email);
      await admin.auth().setCustomUserClaims(user.uid, { admin: true });

      return new HttpException(
        `Success! ${user.email} has been made an admin!`,
        HttpStatus.OK,
      );
    } catch (e) {
      return new HttpException(`${e.message}`, HttpStatus.NOT_FOUND);
    }
  }
}
