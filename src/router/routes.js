import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import User from "../pages/User";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} errorElement={<NotFound />} />
            <Route path="/user/:id" element={<User />} errorElement={<NotFound />} />
            <Route path="/about" element={<About />} errorElement={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
