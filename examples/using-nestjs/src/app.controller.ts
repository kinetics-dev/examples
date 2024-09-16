import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { Auth } from "./auth/auth.decorator";
import { Role } from "./auth/role.enum";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/admin")
  @Auth(Role.Admin)
  getHelloAdmin(): string {
    return this.appService.getHello();
  }
}
