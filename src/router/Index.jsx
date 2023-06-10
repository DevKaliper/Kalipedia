import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "../Layout/GeneralLayout";
import { Home } from "../pages/Home";
import Simpsons from "../pages/Simpsons"
import Youtubev3 from "../pages/Youtubev3"
import News from "../pages/News"

import NewsLayout from "../Layout/NewsLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <GeneralLayout />,
  
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/simpsons",
                element: <Simpsons />,
            },
            {
                path: "/youtubev3",
                element: <Youtubev3 />,
            },
        ],
    },
    {
        path:"/news",
        element:<NewsLayout content={<News/>}/>
    }
]);