import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "@auth/core/providers/google"
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ]
})
