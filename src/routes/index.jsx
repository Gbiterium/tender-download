import {Route, Routes} from "react-router-dom";
import HomePage from '../pages/TendersPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoutes from "./protectedRoutes";
export const AppRoutes = () => {
      return (
          <Routes>
            <Route element={<ProtectedRoutes />}>
            <Route path='/tenders' element={<HomePage/>}/>
            </Route>
            <Route path='/' element={<LoginPage/>}/>
            <Route path={'*'} element={<div>404 Not found </div>}/>
            </Routes>
            
      )
    }