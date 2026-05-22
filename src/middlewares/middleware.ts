import { Request, Response, NextFunction } from "express";
import { jwtVerify, createRemoteJWKSet } from "jose";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const JWKS = createRemoteJWKSet(
      new URL(`${process.env.BETTER_AUTH_URL}/api/auth/jwks`)
    );

    let token: string | undefined;

    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const { payload } = await jwtVerify(token, JWKS);
    console.log("payload...", payload);

    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};