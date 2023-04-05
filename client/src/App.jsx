import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavPage from "./nav/NavPage";
import HomePage from "./home/HomePage";
import SearchTitlesPage from "./search-titles/SearchTitlesPage";
import LoginPage from "./login/LoginPage";
import Container from "react-bootstrap/Container"

const router = createBrowserRouter([

    {
        path: "/",
        element: <NavPage><HomePage /></NavPage>
    },

    {
        path: "/search-titles",
        element: <NavPage><SearchTitlesPage /></NavPage>
    },

    {
        path: "/login",
        element: <Container><LoginPage /></Container>
    }
])

function App() {

    return (
        <>  
            <RouterProvider router={router} />
        </>
    );
}

export default App;