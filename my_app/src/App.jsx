import './App.css'
import Navbar from './components/global/Navbar'
// import { Route, Routes } from 'react-router-dom'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import ApiFatch from './components/ApiFatch'

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  const route = createBrowserRouter(
    [
      {
        path: '/',
        element: < Layout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/contact',
            element: <Contact />
          }
        ]
      },
      {
        path: '/signin',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Register />
      },
      {
        path: '/apifetch',
        element: <ApiFatch />
      },
      {
        path: '*',
        element: < >
          <h1>404 NOT FOUND</h1>
        </>
      },
    ]
  )

  return (
    <>
      <RouterProvider router={route} />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes> */}


    </>
  )
}

export default App
