import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./globals.css";
import Aifullstackpage from "./pages/Aifullstackpage";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ai-fullstack-development" element={<Aifullstackpage />} />
            </Routes>
        </>
    );
}