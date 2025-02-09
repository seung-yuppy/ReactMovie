import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Result from "./pages/result";
import Detail from "./pages/detail";
import Home from "./pages/home";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "result/:search",
                element: <Result />
            },
            {
                path: "detail/:id",
                element: <Detail />
            },
        ]
    }
])