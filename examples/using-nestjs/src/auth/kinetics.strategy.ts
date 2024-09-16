import { Strategy } from "passport-custom";
import { PassportStrategy } from "@nestjs/passport";
import { Inject, Injectable } from "@nestjs/common";

import { verifyToken } from "kinetics-core";
import { extractBearerTokenFromRequest } from "./auth.utils";
import { kineticsConfig } from "./kinetics.config";
import { ConfigType } from "@nestjs/config";

@Injectable()
export class KineticsStrategy extends PassportStrategy(Strategy, "kinetics") {
  constructor(
    @Inject(kineticsConfig.KEY)
    config: ConfigType<typeof kineticsConfig>
  ) {
    super((req, callback) => {
      verifyToken(extractBearerTokenFromRequest(req), config)
        .then((user) => {
          callback(null, user);
        })
        .catch((err) => {
          callback(err);
        });
    });
  }
}
