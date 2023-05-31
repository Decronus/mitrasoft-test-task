import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

export const AppRoutes = ({ user, setUser }) => {
    return (
        <Routes>
            <Route path="/" element={<Main user={user} setUser={setUser} />} errorElement={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
