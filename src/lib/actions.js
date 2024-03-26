'use server'
import { signIn, signOut } from "./auth"
import { redirect } from 'next/navigation'
import axios from "./axios"

export const navigate = async (url) => {
    redirect(url)
}

export const handleSignOut = async () => {
    await signOut({ redirectTo: "/login", redirect: true });

}

export const handleGithubLogin = async () => {
    await signIn("github", { redirectTo: "/", redirect: true })
}

export const handleGoogleLogin = async () => {
    await signIn("google", { redirectTo: "/", redirect: true })
}

export const loginWithCredentials = async (fromData) => {
    return await axios.get('/sanctum/csrf-cookie').then(async () => {
       return await axios.post('/login', {
            email: fromData.email,
            password: fromData.password
        }).then(async (response) => {
            if (response.status === 200) {
                await signIn('credentials', {
                    user: JSON.stringify(response.data.user),
                    redirect: true,
                    redirectTo: '/'
                })
                return response.data.message
            }
        }).catch(error => {
            throw error
        });
    }).catch(error => {
        throw error
    })


}  