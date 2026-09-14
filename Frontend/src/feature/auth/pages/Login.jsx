import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from "../hook/useAuth"
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const user = useSelector(state => state.auth.user)
    const loading = useSelector(state => state.auth.loading)

    const navigate = useNavigate()
    const {handleLogin} = useAuth()
  //  const error = useSelector((s)=>s.auth.error)

    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log("Login: handleSubmit called", { email, password })
        await handleLogin({email,password})
    //   console.log("Login: handleLogin returned", ok)
     navigate("/")
    }

    if(!loading && user){
        return <Navigate to="/" />
    }

    


  return (
    <div className="min-h-screen bg-[#0b1020] text-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-[0_0_40px_rgba(14,165,233,0.18)] backdrop-blur-sm">
        <div className="grid md:grid-cols-2">
          <div className="hidden md:flex flex-col justify-between bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_40%),linear-gradient(135deg,#0f172a,#111827_40%,#020617)] p-10">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-cyan-300 uppercase">
                Welcome back
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white">
                Your next AI-powered<br />conversation starts here.
              </h1>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                <p>Smart responses tailored to your workflow.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-400"></span>
                <p>Private, secure, and easy to use across devices.</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Sign in</p>
                <h2 className="mt-2 text-3xl font-bold text-white">Login</h2>
              </div>
              <div className="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-200">
                Secure
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between text-sm text-slate-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-400" />
                  Remember me
                </label>
                <a href="#" className="text-cyan-300 transition hover:text-cyan-200">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 px-4 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-95"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              Don’t have an account?{' '}
              <Link to="/register" className="font-semibold text-cyan-300 hover:text-cyan-200">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
