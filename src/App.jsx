import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuthSelector, isRefreshSelector, selectAuthToken } from "./redux/Auth/authSelectors";
import MainPage from "./pages/MainPage/MainPage";
import MainLayout from "./components/MainLayout/MainLayout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Loader from "./components/Loader/Loader";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import { useEffect } from "react";
import { refreshUser } from "./redux/Auth/authOperations";
import { fetchContacts } from "./redux/contact/contactsOperations";

export const App = () => {
  const isAuth = useSelector(isAuthSelector);
  const isRefreshing = useSelector(isRefreshSelector);
  const isToken = useSelector(selectAuthToken)
  const dispatch = useDispatch()

  console.log(isRefreshing);

  useEffect(() => {
    if(isToken) {
      dispatch(refreshUser()).then(() => dispatch(fetchContacts()))
    }
  }, [isToken, dispatch])

  return (
    isRefreshing ? (
      <Loader />
    ) : (
      
    <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={ <PrivateRoute>
              <MainPage />
            </PrivateRoute>} />
      
      <Route
        path="login"
        element={
          <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
        }
      />
      <Route
        path="register"
        element={
          <PublicRoute restricted>
            <RegisterPage />
          </PublicRoute>
        }
      />
    </Route>

    <Route path="*" element={!isAuth ? <Navigate to="/" /> : <Navigate to='/contacts'/>} />
  </Routes>
    )
  );
};

//----------------------------------------------
// <Routes>
    //   <Route path="/" element={<MainLayout />} >
    //     <Route index element={<MainPage />} />
    //     <Route path="register" element={<RegisterPage />} />
    //     <Route path="login" element={<LoginPage />} />
    //   </Route>
    // </Routes>

//----------------------------------------------

 // martynov@mail.com
// examplepwd12345