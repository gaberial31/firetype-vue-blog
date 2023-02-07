import { NestFactory } from "@nestjs/core";
import * as admin from "firebase-admin";

import * as settings from "./config/settings.json";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: settings.client_email,
      privateKey: settings.private_key,
      projectId: settings.project_id,
    }),
  });

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
