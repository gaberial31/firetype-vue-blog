import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from "@nestjs/common";

import * as admin from "firebase-admin";

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();

      const [_, token] = request.headers.authorization.split(" "); // [Bearer, token]

      const decodedToken = await admin.auth().verifyIdToken(token);

      const isAdmin = Boolean(decodedToken.admin);

      return isAdmin;
    } catch (e) {
      throw new HttpException(`${e.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
