import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"

const App = () => {
    return (
        <div className="bg-[#F5F5F5] min-h-screen">
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    )
}

export default App