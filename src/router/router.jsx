import { createBrowserRouter } from "react-router-dom";

import { Baselayout } from "../pages/Baselayout";
import { BaselayoutSignUp } from "../pages/signUp/BaselayoutSignUp";
import { CustomerSelection } from "../pages/signUp/CustomerSelection";
import { Interests } from "../pages/signUp/Interests";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Baselayout />,
        children: [
            {
                path: "",
                element: <BaselayoutSignUp />,            
                children: [
                    {
                        path: "",
                        element: <CustomerSelection />,
                    },
                    {
                        path: "Interests",
                        element: <Interests />
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