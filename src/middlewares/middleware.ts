import { Request, Response, NextFunction } from "express";
import { jwtVerify, createRemoteJWKSet } from "jose";

declare global {
  namespace Express {
    interface Request {
      user?: unknown;
    }
  }
}

const JWKS = createRemoteJWKSet(
  new URL("https://doc-appoint-client-pi.vercel.app/api/auth/jwks")
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

    if (authHeader?.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    // 2. Or from cookie
    if (!token && req.cookies?.token) {
      token = req.cookies.token;
    }

    // 3. No token → reject
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // 4. Verify JWT
    const { payload } = await jwtVerify(token, JWKS, {
      algorithms: ["RS256"],
    });

    // 5. Attach user
    req.user = payload;

    next();
  } catch (err) {
    console.error("Token verification failed:", err);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};