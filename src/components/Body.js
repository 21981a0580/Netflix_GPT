import Browser from "./Browser";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body=()=>{
    const appRouter =createBrowserRouter([

        {
            path:"/login",
            element:<Login />
        }
        ,{
            path:"/browse",
            element:<Browser />
        }
    ])
    return(
        <div>
                <RouterProvider router={appRouter} />

        </div> 
    );
}
export default Body;
