import { Controller, Get, Post, Body, UseGuards } from "@nestjs/common";

import { AppService } from "./app.service";
import { AuthGuard } from "./guards/auth.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("addAdminRole")
  @UseGuards(AuthGuard)
  async addAdminClaims(@Body() body: { email: string }) {
    return await this.appService.addAdminRole(body.email);
  }
}
