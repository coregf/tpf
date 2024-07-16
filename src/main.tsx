import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContextProvider} from './UserContext'
import AuthGuard from './AuthGuard'
import Dashboard  from './pages/Dashboard'
import { PublicRouteGuard } from './PublicRouteGuard';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route element={<PublicRouteGuard />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="product/:id" element={<ProductDetail />} />
            <Route element={<AuthGuard />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
)
