import { Route, Routes } from "react-router-dom"
import LegalChatbotLanding from "./pages/landing"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LegalChatbotLanding />} />
      </Routes>
    </>
  )
}

export default App
