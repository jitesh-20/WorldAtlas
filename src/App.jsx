import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import HomeComponent from "./Pages/Home.jsx";
import AboutComponenet from "./Pages/About.jsx";
import ContactComponent from "./Pages/Contact.jsx";
import CountryComponent from "./Pages/Country.jsx";
import Applayout from "./Components/Layout/AppLayout.jsx";
import Error from "./Pages/Error.jsx";
import { CountryDetails } from "./Components/Layout/CountryDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,         //This is used when we don't have any page which we access then this error page will rendered...
    children: [
      {
        path: "/",
        element: <HomeComponent />
      },
      {
        path: "about",
        element: <AboutComponenet />
      },
      {
        path: "contact",
        element: <ContactComponent />
      },
      {
        path: "country",
        element: <CountryComponent />
      },
      {
        path: "country/:id",           //when we use : in path then it will create a dynamic route
        element: <CountryDetails />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;