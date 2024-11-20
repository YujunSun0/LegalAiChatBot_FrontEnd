import { Route, Routes } from "react-router-dom"
import LegalChatbotLanding from "./pages/landing"
import LoginPage from "./pages/login"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LegalChatbotLanding />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
