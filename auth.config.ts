import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      const isOnHome = nextUrl.pathname.startsWith('/');
      
      if (!isLoggedIn) return false;

      const isUserPage = nextUrl.pathname.startsWith('/invitee/'+auth?.user?.name?.toLowerCase());

      if (isOnLogin) {        
        return Response.redirect(new URL('/', nextUrl));
      } else if (!isOnHome && !isUserPage)
        return Response.redirect(new URL('/invitee/'+auth?.user?.name?.toLowerCase(), nextUrl));
      else
        return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;