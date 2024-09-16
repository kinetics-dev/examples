import { registerAs } from "@nestjs/config";
import { Config } from "kinetics-core";

/**
 * NOTE: This is an example only
 *
 * This config is optional as long as `KINETICS_API_KEY` exists in the environment variable.
 * However we recommend specifying it like here explicitly which makes it easier to debug.
 * 
 * @see {@link https://app.kinetics.dev/settings/credentials}
 */
export const kineticsConfig = registerAs<Config>("auth", () => {
  return {
    apiKey: process.env.KINETICS_API_KEY,
  };
});
