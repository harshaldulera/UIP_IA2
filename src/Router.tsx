import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AddAppointment from "./pages/AddAppointment";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const Router = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/add" element={<AddAppointment />} />
            </Routes>
        </DndProvider>
    );
};