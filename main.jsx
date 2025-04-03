import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard.jsx'
import Connexion from './connexion/Connexion.jsx'
import Inscription from './inscription/Inscription.jsx'
import {Toaster} from 'react-hot-toast'
import Achat from './achat/Achat.jsx'
import Contact from './contact/Contact.jsx'
import Echanger from '../echanger/Echanger.jsx'



//Creation de de l'objet BrowserRouter

const router= createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/inscription",
    element: <Inscription />
  },
  {
    path:"/achat",
    element: <Achat />
  },
  {
    path:"/contact",
    element: <Contact/>
  },
  {
    path:"/echanger",
    element: <Echanger />
  },
  
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider 
       router={router}>

    </RouterProvider>
  </React.StrictMode>
);
