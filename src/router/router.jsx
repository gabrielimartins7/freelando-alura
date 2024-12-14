import { createBrowserRouter } from "react-router-dom";

import { Baselayout } from "../pages/Baselayout";
import { BaselayoutSignUp } from "../pages/signUp/BaselayoutSignUp";
import { CustomerSelection } from "../pages/signUp/CustomerSelection";
import { Interests } from "../pages/signUp/Interests";
import { PersonalData } from "../pages/signUp/PersonalData";
import { Completed } from "../pages/signUp/Completed";


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
                        element: <PersonalData />
                    },
                    {
                        path: "completed",
                        element: <Completed />
                    }
                ]
            }
        ],
    },
]);