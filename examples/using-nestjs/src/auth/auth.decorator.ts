import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { ROLES } from "./auth.constants";
import { KineticsAuthGuard } from "./kinetics-auth.guard";
import { Role } from "./role.enum";
import { RolesGuard } from "./roles.guard";

/**
 *
 * @param roles
 * @returns
 */
export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata(ROLES, roles),
    UseGuards(KineticsAuthGuard, RolesGuard)
  );
}
