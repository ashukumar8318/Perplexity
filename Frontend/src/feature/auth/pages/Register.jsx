import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="min-h-screen bg-[#090d18] text-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl border border-violet-500/20 bg-slate-950/80 shadow-[0_0_45px_rgba(168,85,247,0.20)] backdrop-blur-sm">
        <div className="grid md:grid-cols-2">
          <div className="hidden md:flex flex-col justify-between bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.22),_transparent_40%),linear-gradient(135deg,#111827,#1f2937_38%,#050816)] p-10">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-violet-200 uppercase">
                Join now
              </div>
              <h1 className="text-4xl font-bold leading-tight text-white">
                Build smarter conversations<br />with a better workflow.
              </h1>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-400"></span>
                <p>Create your account and unlock productivity tools.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                <p>Stay connected with high-performance AI experiences.</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">Create account</p>
                <h2 className="mt-2 text-3xl font-bold text-white">Register</h2>
              </div>
              <div className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                New
              </div>
            </div>

            <form className="space-y-5">
              <div>
                <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-300">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-4 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-95"
              >
                Create account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-violet-300 hover:text-violet-200">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
