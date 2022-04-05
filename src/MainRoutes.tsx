import { useRoutes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Task } from "./components/Task";

export function MainRoute(){
    return useRoutes ([
        { path: '/', element: <Dashboard />},
        { path: '/task', element: <Task />}
    ])
}