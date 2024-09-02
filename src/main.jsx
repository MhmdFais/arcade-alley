import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'
import About from './About.jsx'
import './index.css'
import { CartProvider } from './context/CartContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/about',
    element: <About />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* Wrap the app with the CartProvider */}
      <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
