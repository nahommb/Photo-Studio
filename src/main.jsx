import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DetailContainer from './Detail-container.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
   {
    path:'/',
    element:<App/>,
    errorElement:<h2>error</h2>
   },
   {
    path:'/detail',
    element:<DetailContainer/>
   }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <RouterProvider router={router}/>
  </>,
)
