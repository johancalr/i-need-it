import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from '../../Pages/Home';
import { MyAccount } from '../../Pages/MyAccount';
import { MyOrders } from '../../Pages/MyOrders';
import { MyOrder } from '../../Pages/MyOrder';
import { NotFound } from '../../Pages/NotFound';
import { SignIn } from '../../Pages/SignIn';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/',           element: <Home/>      },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-orders',  element: <MyOrders/>  },
    { path: '/my-order',   element: <MyOrder/>   },
    { path: '/sign-in',    element: <SignIn/>    },
    { path: '/*',          element: <NotFound/>  },
  ]);

  return routes;
};

export { AppRoutes };