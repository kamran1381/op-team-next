'use server'
import { auth, signIn, signOut } from "./auth"
import axios from "./axios"



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

export const loginWithCredentials = async (formData) => {

   
    try {
         
        const response = await axios.post('https://api.op-team.ir/api/login', {
            email: formData.email,
            password: formData.password
        });

        if (response.status === 200) {
            await signIn('credentials', {
                user: JSON.stringify(response.data.user),
                redirect: false,
            });
            console.log(response)

            return { message: 'ورود موفق', status: 200 };
        }

    } catch (error) {
        if (error.response) {
            if (error.response.status===422){
                return { message: 'مقادیر ورودی غیر مجاز است', status: error.response.status };
            }
            if (error.response.status===401){
                return { message: 'اطلاعات کاربر وارد شده نامعتبر است', status: error.response.status };
            }
        }
        return { message: 'خطای نامشخص', status: 520 };
    }

}

