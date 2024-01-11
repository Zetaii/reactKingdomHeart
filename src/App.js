import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Services from "./components/Services"
import Trailer from "./components/Trailer"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/trailer" element={<Trailer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
