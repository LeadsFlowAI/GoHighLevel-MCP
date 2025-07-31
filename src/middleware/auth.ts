// src/middleware/auth.ts
import { Request, Response, NextFunction } from "express";

export function requireApiKey(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers["x-api-key"];
    const validKey = process.env.MCP_API_KEY;

    if (process.env.NODE_ENV === "development") {
        console.log("[Auth Middleware] Skipping API key check in development mode.");
        return next(); // Ne bloque rien en dev
    }

    if (!apiKey || apiKey !== validKey) {
        console.warn(`[Auth Middleware] Unauthorized access attempt with key: ${apiKey}`);
        return res.status(401).json({ error: "Unauthorized: invalid or missing API key" });
    }

    console.log("[Auth Middleware] API key validated successfully.");
    next();
} 