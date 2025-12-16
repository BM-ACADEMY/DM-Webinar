import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./globals.css";
import Aifullstackpage from "./pages/Aifullstackpage";
import Data_Analyst from "./pages/Data_Analyst";
import CourseCards from "./pages/CourseCards";
import AnalyticsTracker from "./utils/AnalyticsTracker";

export default function App() {
    return (
        <>
          <AnalyticsTracker />
            <Routes>
                <Route path="/" element={<CourseCards />} />
                <Route path="/ai-fullstack-development" element={<Aifullstackpage />} />
                <Route path="/Data_Analyst" element={<Data_Analyst />} />
                <Route path="/digital-marketing" element={<HomePage />} />
            </Routes>
        </>
    );
}