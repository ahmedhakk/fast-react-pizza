import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />, // errors that will happen to the child elements will bubble up to the parent component
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        // 2) pass the loader fun to the route
        loader: menuLoader,
        // Here the fetch data will start when you load this route directly.
        // differant to useEffect that was fetch on render approach - basiclly we render the component and then fetch the data

        // if the error happens here will appeare inside the AppLayout instead of the Menu component 😉
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        // 3) connect the action fun with action to be called with react router
        action: updateOrderAction, // it will be work fine even this action form is a child component of this <Order /> component 😉
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
