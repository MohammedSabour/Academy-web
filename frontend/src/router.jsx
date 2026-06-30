import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from "./routes/ProtectedRoute"
import Login from './auth/admin/Login'
import Home from './pages/public/Home'
import Dashboard from "./pages/admin/Dashboard";

const router = createBrowserRouter([
    // public routes
    {
        path: '/',
        element: <Home />
    },
    
    {
        path: '/admin/login',
        element: <Login />
    },

    {
        element: <ProtectedRoute/>,
        children:[
            {  
                path: '/admin/dashboard',
                element: <Dashboard />
            }
        ],
    },

]);

export default router;