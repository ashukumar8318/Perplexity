import { useDispatch } from "react-redux";
import { login,register,getMe } from "../services/auth.api";
import { setUser,setLoading,setError } from "../auth.slice";


export async function useAuth() {

    const dispatch = useDispatch()

    async function handleRegister({username,email,passwor}){
        try {
            dispatch(setLoading(true))
            const data = await register({username,email,password})
                    
        } catch (error) {
            dispatch(setError(error.response?.data?.message|| "Registration Failed"))
            
        }
        finally{
            dispatch(setLoading(false))
        }
    }


    async function handleLogin({email,password}) {
        
        try {
            dispatch(setLoading(true))
            const data = await login({email,password})
            dispatch(setUser(data.user))
        } catch (error) {
             dispatch(setError(error.response?.data?.message|| "login Failed"))
            
        }
        finally{
            dispatch(setLoading(false))
        }
        
    }

    async function handlegetMe(){
        try{
         dispatch(setLoading(true))
         const data = await getMe()
         dispatch(setUser(data.user))

    } catch (error) {
             dispatch(setError(error.response?.data?.message|| "login Failed"))
            
        }
        finally{
            dispatch(setLoading(false))
        }
        
    }

    return{
        handleRegister,
        handleLogin,
        handlegetMe

    }
}