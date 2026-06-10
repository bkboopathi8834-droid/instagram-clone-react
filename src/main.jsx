import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'
import Feed from './Feed.jsx'
import Postview from './Postview.jsx'
import EditProfile from './EditProfile.jsx'
import Create from './Create.jsx'
import Login from './Login.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/home',
      element:<App/>,
      children:
        [
          {
            index:true,
            element: <Feed/>
          },
          {
            path:'profile',
            element:<Profile/>,
          },
          {
            path:'viewpost/:id',
            element:<Postview />
          },
          {
            path:'editprofile',
            element:<EditProfile/>
          },
          {
            path:'create',
            element:<Create/>
          }
        ]
    },
    {
      path:'/story/:id',
      element:<ViewStory/>
    },
    
  ]
);

 
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
