import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import './index.css'
import Add from "./pages/add"
const App = () => {
    return (
        <div className="bg-[#F5F5F5] min-h-screen">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/add" element={<Add/>} />
            </Routes>
        </div>
    )
}

export default App