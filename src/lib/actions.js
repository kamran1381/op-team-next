'use server'
import { auth, signIn, signOut } from "./auth"
import { redirect } from 'next/navigation'
import axios from "./axios"

export const navigate = async (url) => {
    redirect(url)
}

export const isLogin = () => {
    const isAuth = auth()
    return isAuth
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
                return 'ورود موفق'
            }
        }).catch(error => {
            console.log(error)
            throw error
        });
    }).catch(error => {
        console.log(error)
        throw error
    })


}  