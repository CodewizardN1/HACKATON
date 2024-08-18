import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import './index.css'
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    )
}

export default App