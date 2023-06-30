import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Cookies from 'js-cookie'

export function middleware(request: NextRequest) {

    // const userToken = request.cookies.get('auth_token')?.value;

    // console.log('auth_token', userToken);

    // // userToken ? NextResponse.redirect(new URL('/', request.url)) : NextResponse.redirect(new URL('/login', request.url))


    // if (!userToken) {

    //     return NextResponse.redirect(new URL('/login', request.url))

    // }

    // else {

    //     return NextResponse.redirect(new URL('/', request.url))

    // }

}
