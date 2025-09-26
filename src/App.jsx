import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Thanks from "./components/Thanks"
import NoPage from "./components/NoPage"
export default function App() {

  return (
    <div className="bg-darkestGrey  min-h-screen text-White font-Overpass
    flex items-center justify-center p-4 font-[15px]">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* home is the default page */}
          <Route path="/home" element={<Home />} />
          <Route path="/thanks" element={<Thanks />} /> 
          <Route path="*" element={<NoPage />} /> 
          {/* in case of errors */}
        </Routes>
      </BrowserRouter>


      
    </div>
  )
}