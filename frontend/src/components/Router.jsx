import React from 'react'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Menu from './Menu'
import Banner from './Banner'
import Bannerimg from './Bannerimg'
import Home from './Home'
import Homesec from './Homesec'
function Router() {
    const myrouter = createBrowserRouter([
        { path:'/', element: <><Menu/>,<Banner/>,<Bannerimg/></>},
        { path:'/home', element: <><Menu/>,<Home/>,<Homesec/></>},
        { path:'/fruit',element:<></>},
        { path:'/fruit1',element:<></>},
        {path:'/fruit2',element:<></>},
        { path:'/detail/:userid', element: <></>},
       
    ])
  return (
    <div style={{backgroundColor:'black',color:'white'}}>
      <RouterProvider router={myrouter}/>
    </div>
  )
}

export default Router
