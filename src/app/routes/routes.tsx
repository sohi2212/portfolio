import { createBrowserRouter } from "react-router";
import { ResumePage } from "../../pages/resume";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ResumePage />
    }
])