import ProfileCard from '@/components/ProfileCard'

function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      {/* Animated background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

      {/* Profile Card */}
      <ProfileCard />

      {/* Footer */}
      <div className="absolute bottom-4 text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Sahal Saad
      </div>
    </div>
  )
}

export default App
