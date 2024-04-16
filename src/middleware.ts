import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const url = new URL(request.url);

	if (
		!/^.{8}\.minagishl\.pages\.dev$/.test(url.hostname) &&
		(request.url.includes('vercel.app') || request.url.includes('pages.dev'))
	) {
		url.hostname = process.env.HOSTNAME as string;
		return NextResponse.redirect(url.toString());
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
