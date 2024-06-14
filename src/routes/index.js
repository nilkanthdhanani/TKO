import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home";
import Error from "../error";
import Authantication from "../modules/authantication";
import Verification from "../modules/ageVerification";
import Sorry from "../modules/sorry";
import Product from "../modules/product";
import Labresults from "../modules/labResults";
import Contactus from "../modules/contactUs";
import Mycart from "../modules/myCart";
import Myorders from "../modules/myOrders";
import Success from "../modules/success";
import ProductDetail1 from "../modules/productDetail1";
import CommingSoon from "../modules/commingSoon";
import ProductDetail2 from "../modules/productDetail2";
import ProductDetail3 from "../modules/productDetail3";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />
    },
    {
        path: "/auth",
        element: <Authantication />
    },
    {
        path: "/verification",
        element: <Verification />
    },
    {
        path: "/sorry",
        element: <Sorry />
    },
    {
        path: "/labresults",
        element: <Labresults />
    },
    {
        path: "/product",
        element: <Product />
    },
    {
        path: "/contactus",
        element: <Contactus />
    },
    {
        path: "/cart",
        element: <Mycart />
    },
    {
        path: "/orders",
        element: <Myorders />
    },
    {
        path: "/success",
        element: <Success />
    },
    {
        path: "/product1",
        element: <ProductDetail1 />
    },
    {
        path: "/product2",
        element: <ProductDetail2 />
    },
    {
        path: "/product3",
        element: <ProductDetail3 />
    },
    {
        path: "/soon",
        element: <CommingSoon />
    },


    {
        path: "*",
        element: <Error />
    }
])

export default router;