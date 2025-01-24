import AiSection from "./AiSection.jsx"
import Community from "./Community/Community.jsx"
import Sidebar from "./Sidebar.jsx"

function App() {

  return (
  <div className="min-w-full bg-slate-100 dark:bg-gray-800 flex justify-between">
      <Sidebar />
      <AiSection />
      <Community  />
    </div>
  )
}

export default App
