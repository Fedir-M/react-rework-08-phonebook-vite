import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import MainPage from "./pages/MainPage/MainPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<MainPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
