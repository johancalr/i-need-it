import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from '../../Routes/AppRoutes';
import { Navbar } from '../../Components/Navbar';
import { StoreProvider } from '../../Context';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar />
      </BrowserRouter>
    </StoreProvider>
  )
}

export { App };
