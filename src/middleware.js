import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
export async function middleware(request) {

    const session = await auth()
    if (!session) {
        if (request.nextUrl.pathname.startsWith('/userpanel')) {
            return NextResponse.redirect(new URL('/loginfirst', request.url))
        }
        if (request.nextUrl.pathname.startsWith('/admin')) {
            return NextResponse.redirect(new URL('/accessdenied', request.url))
        }
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/userpanel/:path*', '/admin/:path*'],
}