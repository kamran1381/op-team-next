'use server'
import { signIn, signOut } from "./auth"


export const handleSignOut = async () => {
    'use server';
    await signOut();
    
}

export const handleGithubLogin =async () => {
    'use server';
    await signIn("github",{ redirectTo: "/", redirect: true })
}


export const handleGoogleLogin = async () => {
    'use server';
    await signIn("google", { redirectTo: "/", redirect: true })
}

export const loginWithCredentials =async (status) => {
    await signIn('credentials', {
        status: status
    })

}