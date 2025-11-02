import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './components/Home'
 import About from './components/About'
 import Contact from './components/Contact'
 import OffMarket from './components/OffMarket'
 import OnMarket from './components/OnMarket';
 import User from './components/User'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
   const router = createBrowserRouter([
    {
      path: "/",
      element:  <><Navbar/><Home/><Footer/></>
     },
    {
       path: "/about",
      element:  <><Navbar/><About/><Footer/></>
    },
      {
      path: "/contact",
      element:  <><Navbar/><Contact/><Footer/></>
     },
    {
       path: "/offmarket",
      element:  <><Navbar/><OffMarket/><Footer/></>
    },
    {
       path: "/onmarket",
      element: <><Navbar/><OnMarket/><Footer/></>
    },
     {
       path: "/user/:username",
      element: <><Navbar/><User/></>
    }
  ])
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
