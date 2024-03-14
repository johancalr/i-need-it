import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { AppRoutes } from '../../Routes/AppRoutes';
import { Navbar } from '../../Components/Navbar';
import { StoreProvider } from '../../Context';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </StoreProvider>
  )
}

export { App };
