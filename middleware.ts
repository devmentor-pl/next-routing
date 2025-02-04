import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
 
export default function(req: NextRequest) {
    const { pathname } = req.nextUrl;
  
    console.log(`Middleware dla: ${pathname}`);

    if(pathname.startsWith('/admin')) {
        // ...
        const auth = req.cookies.get('auth');
        // realnie sprawdzamy w bazie czy taki występuje
        if (!auth) { 
            return NextResponse.redirect(
                new URL('/login', req.url)
            );
        }
    }

    // return NextResponse.next(); 
    return createMiddleware(routing)(req);
}
 
export const config = {
    matcher: [
        '/admin/:path*', 
        '/', 
        '/(pl|en)/:path*'
    ]
};