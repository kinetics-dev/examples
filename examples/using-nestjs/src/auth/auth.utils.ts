import { Request } from "express";

/**
 * Vanilla implementation to extract Bearer token from request headers
 */
export const extractBearerTokenFromRequest = (req: Request): string | null => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};
