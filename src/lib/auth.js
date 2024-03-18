import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "@auth/core/providers/credentials"
import Google from "@auth/core/providers/google"




export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
        }),
        Google({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET
        }),
        Credentials({
            async authorize(credentials) {
                if (credentials.status == 200) {
                    return credentials
                } else {
                    return null;
                }
            }
        })
    ],
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    trustHost: true,

})
