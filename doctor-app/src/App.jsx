import Community from "./Community/Community.jsx"
import Sidebar from "./Sidebar.jsx"

function App() {

  return (
  <div className="min-w-full bg-slate-100 flex justify-between">
      <Sidebar />
      <Community  />
    </div>
  )
}

export default App
