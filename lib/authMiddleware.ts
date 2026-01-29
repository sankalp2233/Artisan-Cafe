import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './auth';

export function authMiddleware(handler: (req: NextRequest) => Promise<NextResponse>) {
    return async (req: NextRequest) => {
        const token = req.headers.get('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized - No token provided' }, { status: 401 });
        }

        const decoded = verifyToken(token);

        if (!decoded) {
            return NextResponse.json({ error: 'Unauthorized - Invalid token' }, { status: 401 });
        }

        // Add user info to request headers for use in the handler
        req.headers.set('x-user-email', decoded.email);
        req.headers.set('x-user-id', decoded.id);

        return handler(req);
    };
}
