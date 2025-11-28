import { createBrowserRouter } from "react-router";
import IndexPage from "./pages/IndexPage";
import AdminPage from "./pages/AdminPage";
import MainLayout from "./pages/MainLayout";
import AboutPage from "./pages/AboutPage";
import QuizesPage from "./pages/QuizesPage/QuizesPage";
import CreateQuizPage from "./pages/CreateQuizPage";
import UserCardPage from "./pages/UserCardPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import CreateUserPage from "./pages/CreateUserPage_FormData1";

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: IndexPage,
            },
            {
                path: "admin",
                Component: AdminPage
            },
            {
                path: 'about',
                Component: AboutPage
            },
            {
                path: 'quizes',
                Component: QuizesPage
            },
            {
                path: 'quizes/create',
                Component: CreateQuizPage
            },
            {
                path: 'users/:id',
                Component: UserCardPage
            },
            {
                path: 'products',
                Component: ProductsPage
            },
            {
                path: 'cart',
                Component: CartPage
            },
            {
                path: 'user/create',
                Component: CreateUserPage
            }
        ]
    }
]);
