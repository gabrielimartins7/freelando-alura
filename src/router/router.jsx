import { createBrowserRouter } from "react-router-dom";

import { Baselayout } from "../pages/Baselayout";
import { CustomerSelection } from "../pages/signUp/CustomerSelection";


export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "signUp",
                element: <Baselayout />,            
                children: [
                    {
                        path: "",
                        element: <CustomerSelection />,
                    },
                    {
                        path: "client",
                        element: <h1>Interesses</h1>
                    },
                    {
                        path: "personal-data",
                        element: <h1>Dados Pessoais</h1>
                    },
                    {
                        path: "completed",
                        element: <h1>Concluido</h1>
                    }
                ]
            }
        ],
    },
]);