import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
export async function middleware(request)  {
    
    const session = await auth()
    if(!session){
       return NextResponse.redirect(new URL('/loginfirst' , request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/userpanel/:path*','/admin/:path*'] ,
}