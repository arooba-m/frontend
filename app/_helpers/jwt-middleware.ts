import { NextRequest } from 'next/server';

// import { auth } from '_helpers/server';
import { auth } from './auth';
export { jwtMiddleware };

async function jwtMiddleware(req: NextRequest) {
    if (isPublicPath(req))
        return;        

    // verify token in request cookie
    const id = auth.verifyToken();
    req.headers.set('userId', id);
}

function isPublicPath(req: NextRequest) {
    // public routes that don't require authentication
    const publicPaths = [
        'POST:/api/accounts/login',
        'POST:/api/accounts/logout',
        'POST:/api/accounts/register'
    ];
    return publicPaths.includes(`${req.method}:${req.nextUrl.pathname}`);
}