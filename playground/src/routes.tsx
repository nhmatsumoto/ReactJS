import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Timer } from "./pages/Timer";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/timer" element={<Timer date={new Date()} />} />
            </Routes>
        </Router>
    )
}