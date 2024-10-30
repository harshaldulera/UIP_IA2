import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Register from "./pages/Register"

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}