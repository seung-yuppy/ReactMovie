import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import App from "./App";
import Result from "./pages/result";
import Detail from "./pages/detail";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Main />
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