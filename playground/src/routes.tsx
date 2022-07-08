import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Timer } from "./pages/Timer";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/timer" element={<Timer date={new Date()} />} />
            </Routes>
        </Router>
    )
}