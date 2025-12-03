import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './router/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='urbanist-font max-w-10/12 mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
