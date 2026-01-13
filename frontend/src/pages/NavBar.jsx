import React from 'react'

const NavBar = () => {
 return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-blur-xl border-b border-white/10 px-6 py-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    TODO
                </div>
            </div>
        </nav>
    )
}

export default NavBar
