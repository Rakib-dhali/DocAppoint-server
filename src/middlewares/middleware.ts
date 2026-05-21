import { Request, Response, NextFunction } from "express";
import { jwtVerify, createRemoteJWKSet } from "jose";

const JWKS = createRemoteJWKSet(
  new URL(`${process.env.CLIENT_URL}/api/auth/jwks`)
);

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: string | undefined;

    // 1. Get token from header
    const authHeader = req.headers.authorization;
    console.log("auth header", authHeader)

    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    // 3. No token → reject
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // 4. Verify JWT
    const { payload } = await jwtVerify(token, JWKS);
    console.log(payload)

    next();
  } catch (err) {
    console.error("Token verification failed:", err);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};