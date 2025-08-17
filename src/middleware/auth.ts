// src/middleware/auth.ts
import { Request, Response, NextFunction } from "express";

export function requireApiKey(req: Request, res: Response, next: NextFunction) {
    // ---- START DEBUGGING ----
    // Log all incoming headers to see what the client is sending
    console.log("DEBUG: Incoming Headers:", JSON.stringify(req.headers, null, 2));
    // ---- END DEBUGGING ----

    // Essayez d'abord de récupérer la clé depuis l'en-tête 'x-api-key'
    let apiKey = req.headers["x-api-key"] as string | undefined;

    // Si elle n'est pas trouvée, vérifiez l'en-tête 'Authorization' (ex: Bearer <token>)
    if (!apiKey) {
        const authHeader = req.headers["authorization"];
        if (authHeader && authHeader.startsWith("Bearer ")) {
            apiKey = authHeader.substring(7); // Extrait le token après "Bearer "
        }
    }

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