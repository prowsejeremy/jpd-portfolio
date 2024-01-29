import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { DecryptAndValidate } from 'src/_lib/helpers/crypt'

export function middleware(request: NextRequest) {
  
  const key = request.headers.get('authorization')

  if (key && DecryptAndValidate(key)) {
    return NextResponse.next()
  } else {
    return NextResponse.json({ status: 401, message: 'Auth required' })
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/leaderboard',
}